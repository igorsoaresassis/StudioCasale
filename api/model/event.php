<?php

class Event
{
	var $eventId;
	var $eventStartDate;
	var $eventEndDate;
	var $eventDescription;
	var $roomId;
	var $roomName;
	var $userId;

	function FillByObject($obj)
	{
		if (property_exists($obj, 'eventId'))
			$this->eventId = $obj->eventId;

		if (property_exists($obj, 'eventStartDate'))
			$this->eventStartDate = $obj->eventStartDate;

		if (property_exists($obj, 'eventEndDate'))
			$this->eventEndDate = $obj->eventEndDate;

		if (property_exists($obj, 'eventDescription'))
			$this->eventDescription = $obj->eventDescription;

		if (property_exists($obj, 'roomId'))
			$this->roomId = $obj->roomId;

		if (property_exists($obj, 'roomName'))
			$this->roomName = $obj->roomName;

		if (property_exists($obj, 'userId'))
			$this->userId = $obj->userId;
	}

	function FillByDB($dbArray)
	{
		if (array_key_exists('event_id', $dbArray))
			$this->eventId	 = $dbArray['event_id'];

		if (array_key_exists('event_start_date', $dbArray))
			$this->eventStartDate = $dbArray['event_start_date'];

		if (array_key_exists('event_end_date', $dbArray))
			$this->eventEndDate = $dbArray['event_end_date'];

		if (array_key_exists('event_description', $dbArray))
			$this->eventDescription = $dbArray['event_description'];

		if (array_key_exists('room_id', $dbArray))
			$this->roomId = $dbArray['room_id'];

		if (array_key_exists('room_name', $dbArray))
			$this->roomName = $dbArray['room_name'];

		if (array_key_exists('user_id', $dbArray))
			$this->userId = $dbArray['user_id'];
	}
}