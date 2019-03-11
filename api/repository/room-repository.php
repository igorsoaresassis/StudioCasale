<?php

class RoomRepository extends BaseRepository
{

	function GetThis($roomId)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
                r.room_id, r.room_name 
            FROM 
                room r
            WHERE 
                room_id = :room_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':room_id', $roomId);
		$stm->execute();
		$result = $stm->fetch(PDO::FETCH_ASSOC);

		return $result;
	}

	function GetList()
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
			   r.room_id, r.room_name  
            FROM 
                room r';

        if (!GetLoggedUser()->userAdmin)
            $sql .= ' INNER JOIN user_room ur ON (r.room_id = ur.room_id) WHERE ur.user_id = :user_id';

		$stm = $conn->prepare($sql);

        if (!GetLoggedUser()->userAdmin)
            $stm->bindParam(':user_id', GetLoggedUser()->userId);

		$stm->execute();
		$result = $stm->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}

	function Insert(Room &$room)
	{
		if (!GetLoggedUser()->userAdmin) {
			throw new Warning('Nível de acesso inválido');
		}

		$conn = $this->db->getConnection();

		$sql = 'INSERT INTO room (room_name) VALUES (:room_name)';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':room_name', $room->roomName);
		$stm->execute();

		$room->roomId = $conn->lastInsertId();

		return $stm->rowCount() > 0;
	}

	function Update(Room &$room)
	{
		if (!GetLoggedUser()->userAdmin) {
			throw new Warning('Nível de acesso inválido');
		}

		$conn = $this->db->getConnection();

		$sql = 'UPDATE room SET 
            room_name = :room_name
        WHERE room_id = :room_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':room_id', $room->roomId);
		$stm->bindParam(':room_name', $room->roomName);
		$stm->execute();

		return $stm->rowCount() > 0;
	}

	function Delete($roomId)
	{
		if (!GetLoggedUser()->userAdmin) {
			throw new Warning('Nível de acesso inválido');
		}

		$conn = $this->db->getConnection();

		$sql = 'DELETE FROM room WHERE room_id = :room_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':room_id', $roomId);
		$stm->execute();

		return $stm->rowCount() > 0;
	}
}