<?php

class RoomController extends BaseController
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
					$this->ActionGetList();
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

	function ActionGetThis($roomId)
	{
		$repository = new RoomRepository();
		$result = $repository->GetThis($roomId);

		$room = new Room();
		$room->FillByDB($result);

		if (!$room->roomId)
			throw new Warning('Sala não encontrada');

		ToWrappedJson($room);
	}

	function ActionGetList()
	{
		$repository = new RoomRepository();
		$result = $repository->GetList();

		$listRoom = array();

		foreach ($result as $dbRoom) {
			$modelRoom = new Room();
			$modelRoom->FillByDB($dbRoom);
			$listRoom[] = $modelRoom;
		}

		ToWrappedJson($listRoom);
	}

	function ActionInsert($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$room = new Room();
		$room->FillByObject($obj);

		$repository = new RoomRepository();
		$result = $repository->Insert($room);

		if (!$result)
			throw new Warning("Falha ao inserir sala");

		ToWrappedJson($room, 'Sala inserida com sucesso');
	}

	function ActionUpdate($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$room = new Room();
		$room->FillByObject($obj);

		$repository = new RoomRepository();
		$repository->Update($room);

		ToWrappedJson($room, 'Dados atualizados com sucesso');
	}

	function ActionDelete($roomId)
	{
		$repository = new RoomRepository();
		$result = $repository->Delete($roomId);

		if (!$result)
			throw new Warning("Falha ao excluir sala");

		ToWrappedJson("{}", "Sala excluida com sucesso");
	}
}
