<?php

class UserController extends BaseController
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
				case 'login':
					$data = file_get_contents('php://input');
					$this->ActionLogin($data);
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

	function ActionGetThis($userId)
	{
		$repository = new UserRepository();
		$result = $repository->GetThis($userId);

		$user = new User();
		$user->FillByDB($result);

		if (!$user->userId)
			throw new Warning('Usuário não encontrado');

		ToWrappedJson($user);
	}

	function ActionGetList()
	{
		$repository = new UserRepository();
		$result = $repository->GetList();

		$listUser = array();

		foreach ($result as $dbUser) {
			$modelUser = new User();
			$modelUser->FillByDB($dbUser);
			$listUser[] = $modelUser;
		}

		ToWrappedJson($listUser);
	}

	function ActionInsert($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$user = new User();
		$user->FillByObject($obj);

		$repository = new UserRepository();
		$result = $repository->Insert($user);

		if (!$result)
			throw new Warning("Falha ao inserir usuário");

		$user->userPassword = null;

		ToWrappedJson($user, 'Usuário inserido com sucesso');
	}

	function ActionUpdate($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$user = new User();
		$user->FillByObject($obj);

		$repository = new UserRepository();
		$repository->Update($user);

		ToWrappedJson($user, 'Dados atualizados com sucesso');
	}

	function ActionLogin($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$user = new User();
		$user->FillByObject($obj);

		$authData = base64_encode($user->userEmail . ':' . $user->userPassword);

		$repository = new UserRepository();
		$repository->Login($user);

		$_SESSION['userId'] = $user->userId;
		$_SESSION['userName'] = $user->userName;
		$_SESSION['authData'] = $authData;

		ToWrappedJson(null, 'Usuário autenticado com sucesso');
	}
}
