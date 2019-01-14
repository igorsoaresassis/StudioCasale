<?php

class UserRepository extends BaseRepository
{

	function GetThis($userId)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
                user_id, user_name, user_email, user_admin, user_status
            FROM 
                user
            WHERE 
                user_id = :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $userId);
		$stm->execute();
		$result = $stm->fetch(PDO::FETCH_ASSOC);

		$result['user_rooms'] = $this->GetUserRooms($userId);

		return $result;
	}

	function GetList()
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
                user_id, user_name, user_email, user_admin, user_status
            FROM 
               user';

		$stm = $conn->prepare($sql);
		$stm->execute();
		$result = $stm->fetchAll(PDO::FETCH_ASSOC);

		return $result;
	}

	function Insert(User &$user)
	{
		if (!$this->IsAvailableUser($user->userEmail))
			throw new Warning('E-mail já cadastrado');

		$conn = $this->db->getConnection();

		$sql = 'INSERT INTO user (user_name, user_email, user_password) VALUES (:user_name, :user_email, SHA1(:user_password))';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_name', $user->userName);
		$stm->bindParam(':user_email', $user->userEmail);
		$stm->bindParam(':user_password', $user->userPassword);
		$stm->execute();

		$user->userId = $conn->lastInsertId();

		if ($user->userRooms) {
			$userRoomRepository = new UserRoomRepository();
			$userRoomRepository->InsertRooms($user->userId, $user->userRooms);
		}

		return $stm->rowCount() > 0;
	}

	function Update(User &$user)
	{
		if (!$this->IsAvailableUser($user->userEmail, $user->userId))
			throw new Warning('E-mail já cadastrado');

		$conn = $this->db->getConnection();

		$sql = 'UPDATE user SET 
            user_name = :user_name, 
            user_email = :user_email
        WHERE user_id = :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $user->userId);
		$stm->bindParam(':user_name', $user->userName);
		$stm->bindParam(':user_email', $user->userEmail);
		$stm->execute();

		$userRoomRepository = new UserRoomRepository();
		$userRoomRepository->DeleteByUser($user->userId);

		if ($user->userRooms) {
			$userRoomRepository->InsertRooms($user->userId, $user->userRooms);
		}

		return $stm->rowCount() > 0;
	}

	function UpdateStaus($userId, $userStatus)
	{
		$conn = $this->db->getConnection();

		$sql = 'UPDATE user SET user_status = :user_status WHERE user_id = :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_id', $userId);
		$stm->bindParam(':user_status', $userStatus);
		$stm->execute();

		return $stm->rowCount() > 0;
	}

	function Login(User &$user)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT 
					user_id, user_name, user_email, user_admin, user_status
				FROM 
					user 
				WHERE 
					user_email = :user_email AND 
					user_password = SHA1(:user_password)';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_email', $user->userEmail);
		$stm->bindParam(':user_password', $user->userPassword);
		$stm->execute();

		$result = $stm->fetch(PDO::FETCH_ASSOC);

		if (!$result['user_id']) {
			throw new Warning('Usuário ou senha inválidos');
		}

		if ($result['user_status'] != '1') {
			throw new Warning('Usuário inativo');
		}

		$result['user_rooms'] = $this->GetUserRooms($result['user_id']);

		return $result;
	}

	private function IsAvailableUser($email, $userId = null)
	{
		$conn = $this->db->getConnection();

		$sql = 'SELECT user_id FROM user WHERE user_email = :user_email';

		if ($userId)
			$sql .= ' AND user_id <> :user_id';

		$stm = $conn->prepare($sql);
		$stm->bindParam(':user_email', $email);

		if ($userId)
			$stm->bindParam(':user_id', $userId);

		$stm->execute();

		return $stm->rowCount() == 0;
	}

	private function GetUserRooms($userId) {
		$userRoomRepository = new UserRoomRepository();
		return $userRoomRepository->GetByUser($userId);
	}
}