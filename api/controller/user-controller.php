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
				case 'inactivate':
					$key = isset($_GET['key']) ? $_GET['key'] : null;
					$this->ActionUpdateStatus($key, 0);
					break;
				case 'activate':
					$key = isset($_GET['key']) ? $_GET['key'] : null;
					$this->ActionUpdateStatus($key, 1);
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

	function ActionUpdateStatus($userId, $userStatus) {
		$repository = new UserRepository();
		$result = $repository->UpdateStatus($userId, $userStatus);

		if (!$result)
			throw new Warning("Falha ao inativar usuário");

		$msg = "Usuário inativado com sucesso";

		if ($userStatus == 1)
			$msg = "Usuário ativado com sucesso";

		ToWrappedJson("{}", $msg);
	}

	function ActionLogin($data)
	{
		if (!$data) {
			throw new Warning('Os dados enviados são inválidos');
		}

		$obj = json_decode($data);

		$user = new User();
		$user->FillByObject($obj);

		$repository = new UserRepository();
		$result = $repository->Login($user);

		$user->FillByDB($result);

		$user->userPassword = null;
		$user->jwtToken = createJwtToken($user);

		ToWrappedJson($user, 'Usuário autenticado com sucesso');
	}
}
