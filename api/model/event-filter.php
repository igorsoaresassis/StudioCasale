<?php

class EventFilter
{
	var $startDate;
	var $endDate;
	var $roomId;
	var $userId;

	function Fill($filters)
	{
		if ($filters) {
			$filterArray = explode('|', $filters);

			foreach ($filterArray as $filter) {
				$filterKeyVal = explode(':', $filter);
				$key = $filterKeyVal[0];
				$value = $filterKeyVal[1];

				if ($key == 'startDate')
					$this->startDate = $value . ' 00:00:00';

				if ($key == 'endDate')
					$this->endDate = $value . ' 23:59:59';

				if ($key == 'roomId')
					$this->roomId = $value;

				if ($key == 'userId')
					$this->userId = $value;
			}
		}
	}

	function hasFilter() {
		return $this->startDate || $this->endDate || $this->roomId || $this->userId;
	}
}