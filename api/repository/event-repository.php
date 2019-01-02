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

	function GetList()
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
			   event_id, event_start_date, event_end_date, event_description, room_id, user_id
            FROM 
                event';

		$stm = $conn->prepare($sql);
		$stm->execute();
		$result = $stm->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}

	function Insert(Event &$event)
	{
		$conn = $this->db->getConnection();

		if (!$this->IsAvailableSchedule($event))
			throw new Warning('Agenda indisponível. Um evento já foi cadastrado no período selecionado');

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
		$conn = $this->db->getConnection();

		if (!$this->IsAvailableSchedule($event))
			throw new Warning('Agenda indisponível. Um evento já foi cadastrado no período selecionado');

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
				:event_start_date BETWEEN event_start_date AND event_end_date OR 
				:event_end_date BETWEEN event_start_date AND event_end_date OR
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