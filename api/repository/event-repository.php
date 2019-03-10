<?php

class EventRepository extends BaseRepository
{

	function GetThis($eventId)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
			   event_id, event_start_date, event_end_date, event_description, room_id, user_id
            FROM 
                event 
			WHERE 
                event_id = :event_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':event_id', $eventId);
		$stm->execute();
		$result = $stm->fetch(PDO::FETCH_ASSOC);

		return $result;
	}

	function GetList(EventFilter &$filter)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
			   event_id, event_start_date, event_end_date, event_description, e.room_id, r.room_name, e.user_id, u.user_name
            FROM 
                event e
            INNER JOIN room r ON (e.room_id = r.room_id)
            INNER JOIN user u ON (e.user_id = u.user_id)
            WHERE
            	(:ft_start_date IS NULL OR event_start_date >= :ft_start_date) AND
            	(:ft_end_date IS NULL OR event_end_date <= :ft_end_date) AND
            	(:ft_room_id IS NULL OR e.room_id = :ft_room_id) AND
            	(:ft_user_id IS NULL OR e.user_id = :ft_user_id)
            ORDER BY event_start_date';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':ft_start_date', $filter->startDate);
		$stm->bindParam(':ft_end_date', $filter->endDate);
		$stm->bindParam(':ft_room_id', $filter->roomId);
		$stm->bindParam(':ft_user_id', $filter->userId);
		$stm->execute();
		$result = $stm->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}

	function Insert(Event &$event)
	{
		$conn = $this->db->getConnection();

		if (!$this->IsAvailableSchedule($event))
			throw new Warning('Um evento já foi cadastrado no período selecionado');

		$sql = 'INSERT INTO 
				event (event_start_date, event_end_date, event_description, room_id, user_id) 
			VALUES 
				(:event_start_date, :event_end_date, :event_description, :room_id, :user_id)';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':event_start_date', $event->eventStartDate);
		$stm->bindParam(':event_end_date', $event->eventEndDate);
		$stm->bindParam(':event_description', $event->eventDescription);
		$stm->bindParam(':room_id', $event->roomId);
		$stm->bindParam(':user_id', $event->userId);
		$stm->execute();

		$event->eventId = $conn->lastInsertId();

		return $stm->rowCount() > 0;
	}

	function Update(Event &$event)
	{
		if (!GetLoggedUser()->userAdmin && GetLoggedUser()->userId != $event->userId) {
			throw new Warning('Não é possível atualizar um evento cadastrado por outro usuário');
		}

		$conn = $this->db->getConnection();

		if (!$this->IsAvailableSchedule($event))
			throw new Warning('Um evento já foi cadastrado no período selecionado');

		$sql = 'UPDATE event SET 
            event_start_date = :event_start_date,
            event_end_date = :event_end_date,
            event_description = :event_description,
            room_id = :room_id,
            user_id = :user_id
        WHERE event_id = :event_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':event_start_date', $event->eventStartDate);
		$stm->bindParam(':event_end_date', $event->eventEndDate);
		$stm->bindParam(':event_description', $event->eventDescription);
		$stm->bindParam(':room_id', $event->roomId);
		$stm->bindParam(':user_id', $event->userId);
		$stm->bindParam(':event_id', $event->eventId);
		$stm->execute();

		return $stm->rowCount() > 0;
	}

	function Delete($eventId)
	{
		$event = new Event();
		$event->FillByDB($this->GetThis($eventId));

		if ($event->eventId == null) {
			throw new Warning('Evento inválido');
		}

		if (!GetLoggedUser()->userAdmin && GetLoggedUser()->userId != $event->userId) {
			throw new Warning('Não é possível atualizar um evento cadastrado por outro usuário');
		}

		$conn = $this->db->getConnection();

		$sql = 'DELETE FROM event WHERE event_id = :event_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':event_id', $eventId);
		$stm->execute();

		return $stm->rowCount() > 0;
	}

	private function IsAvailableSchedule(Event $event)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT count(*) FROM event WHERE
			room_id = :room_id AND 
			(
				(:event_start_date >= event_start_date AND :event_start_date < event_end_date) OR
				(:event_end_date > event_start_date AND :event_end_date <= event_end_date) OR
				(
					:event_start_date <= event_start_date AND :event_end_date >= event_end_date
				)
			)';

		if ($event->eventId)
			$sql .= ' AND event_id <> :event_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':event_start_date', $event->eventStartDate);
		$stm->bindParam(':event_end_date', $event->eventEndDate);
		$stm->bindParam(':room_id', $event->roomId);

		if ($event->eventId)
			$stm->bindParam(':event_id', $event->eventId);

		$stm->execute();
		$eventCount = $stm->fetchColumn(0);

		return $eventCount == 0;
	}
}
