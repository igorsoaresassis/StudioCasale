<?php

class EventController extends BaseController
{
	function ProcessRequest($action)
	{
		try {
			switch ($action) {
				case 'get':
					$key = isset($_GET['key']) ? $_GET['key'] : null;
					$this->ActionGetThis($key);
					break;
				case 'list':
					$key = isset($_GET['key']) ? $_GET['key'] : null;
					$this->ActionGetList($key);
					break;
				case 'insert':
					$data = file_get_contents('php://input');
					$this->ActionInsert($data);
					break;
				case 'update':
					$data = file_get_contents('php://input');
					$this->ActionUpdate($data);
					break;
				case 'delete':
					$key = isset($_GET['key']) ? $_GET['key'] : null;
					$this->ActionDelete($key);
					break;
				default:
					ToErrorJson('Action not found');
			}
		} catch (Warning $e) {
			ToErrorJson($e->getMessage());
		} catch (Exception $e) {
			ToExceptionJson($e);
		}
	}

	function ActionGetThis($eventId)
	{
		$repository = new EventRepository();
		$result = $repository->GetThis($eventId);

		$event = new Event();
		$event->FillByDB($result);

		if (!$event->eventId)
			throw new Warning('Evento não encontrado');

		ToWrappedJson($event);
	}

	function ActionGetList($key)
	{
		//key=startDate:2019-01-01|endDate:2019-01-31
		$filter = new EventFilter();
		$filter->Fill($key);

		$repository = new EventRepository();
		$result = $repository->GetList($filter);

		$listEvent = array();

		foreach ($result as $dbEvent) {
			$modelEvent = new Event();
			$modelEvent->FillByDB($dbEvent);
			$listEvent[] = $modelEvent;
		}

		ToWrappedJson($listEvent);
	}

	function ActionInsert($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$event = new Event();
		$event->FillByObject($obj);

		$repository = new EventRepository();
		$result = $repository->Insert($event);

		if (!$result)
			throw new Warning("Falha ao inserir evento");

		ToWrappedJson($event, 'Evento inserido com sucesso');
	}

	function ActionUpdate($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$event = new Event();
		$event->FillByObject($obj);

		$repository = new EventRepository();
		$repository->Update($event);

		ToWrappedJson($event, 'Dados atualizados com sucesso');
	}

	function ActionDelete($eventId)
	{
		$repository = new EventRepository();
		$result = $repository->Delete($eventId);

		if (!$result)
			throw new Warning("Falha ao excluir evento");

		ToWrappedJson("{}", "Evento excluido com sucesso");
	}
}
