<?php

class UserRoomRepository extends BaseRepository
{

	function InsertRooms($userId, $rooms)
	{
		foreach ($rooms as $roomId) {
			$this->Insert($userId, $roomId);
		}
	}

	function Insert($userId, $roomId) {
		$conn = $this->db->getConnection();

		$sql = 'INSERT INTO user_room VALUES (:user_id, :room_id)';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $userId);
		$stm->bindParam(':room_id', $roomId);
		$stm->execute();

		return $stm->rowCount() > 0;
	}

	function GetByUser($userId) {
		$conn = $this->db->getConnection();

		$sql = 'SELECT room_id FROM user_room WHERE user_id = :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $userId);
		$stm->execute();
		$result = $stm->fetchAll(PDO::FETCH_COLUMN, 0);

		return $result;
	}

	function DeleteByUser($userId)
	{
		$conn = $this->db->getConnection();

		$sql = 'DELETE FROM user_room WHERE user_id = :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $userId);
		$stm->execute();

		return $stm->rowCount() > 0;
	}
}