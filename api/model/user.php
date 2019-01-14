<?php

class User
{
	var $userId;
	var $userName;
	var $userEmail;
	var $userPassword;
	var $userRooms;
	var $userAdmin = false;
	var $userStatus;

	function FillByObject($obj)
	{
		if (property_exists($obj, 'userId'))
			$this->userId = $obj->userId;

		if (property_exists($obj, 'userName'))
			$this->userName = $obj->userName;

		if (property_exists($obj, 'userEmail'))
			$this->userEmail = $obj->userEmail;

		if (property_exists($obj, 'userPassword'))
			$this->userPassword = $obj->userPassword;

		if (property_exists($obj, 'userAdmin'))
			$this->userAdmin = $obj->userAdmin;

		if (property_exists($obj, 'userStatus'))
			$this->userStatus = $obj->userStatus;

		if (property_exists($obj, 'userRooms'))
			$this->userRooms = $obj->userRooms;
	}

	function FillByDB($dbArray)
	{
		if (array_key_exists('user_id', $dbArray))
			$this->userId = $dbArray['user_id'];

		if (array_key_exists('user_name', $dbArray))
			$this->userName = $dbArray['user_name'];

		if (array_key_exists('user_email', $dbArray))
			$this->userEmail = $dbArray['user_email'];

		if (array_key_exists('user_admin', $dbArray))
			$this->userAdmin = $dbArray['user_admin'] == '1' ? true : false;

		if (array_key_exists('user_status', $dbArray))
			$this->userStatus = $dbArray['user_status'];

		if (array_key_exists('user_rooms', $dbArray)) {
			$this->userRooms = array();

			foreach ($dbArray['user_rooms'] as $room) {
				$this->userRooms[] = intval($room);
			}
		}
	}
}