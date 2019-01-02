<?php

class Room
{
	var $roomId;
	var $roomName;

	function FillByObject($obj)
	{
		if (property_exists($obj, 'roomId'))
			$this->roomId = $obj->roomId;

		if (property_exists($obj, 'roomName'))
			$this->roomName = $obj->roomName;
	}

	function FillByDB($dbArray)
	{
		if (array_key_exists('room_id', $dbArray))
			$this->roomId = $dbArray['room_id'];

		if (array_key_exists('room_name', $dbArray))
			$this->roomName = $dbArray['room_name'];
	}
}