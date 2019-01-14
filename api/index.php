<?php

session_start();

//General Include
require_once 'includes.php';

require_once 'model/_includes.php';
require_once 'controller/_includes.php';
require_once 'repository/_includes.php';

use \Firebase\JWT\JWT;

$controllerName = isset($_GET['controller']) ? $_GET['controller'] : (isset($_POST['controller']) ? $_POST['controller'] : '');
$actionName = isset($_GET['action']) ? $_GET['action'] : (isset($_POST['action']) ? $_POST['action'] : '');

if (!$controllerName || !$actionName) {
	ToErrorJson('Request not found.');
}

if (ENV != 'Dev' && ($controllerName != 'user' || $actionName != 'login')) {
	$jwtToken = GetJwtToken();

	if ($jwtToken == null) {
		header('HTTP/1.0 401 Unauthorized');
		ToErrorJson('Access Denied.');
	}

	try {
		$jwtTokenData = JWT::decode($jwtToken, JWT_SECRET, array('HS256'));
		SaveLoggedUser($jwtTokenData->data);
	} catch (Firebase\JWT\ExpiredException $ex) {
		header('HTTP/1.0 401 Unauthorized');
		ToErrorJson('Expired Token.');
	} catch (Exception $ex) {
		header('HTTP/1.0 401 Unauthorized');
		ToErrorJson('Invalid Token.');
	}
}

switch ($controllerName) {
	case 'user':
		$controller = new UserController();
		$controller->ProcessRequest($actionName);
		break;
	case 'room':
		$controller = new RoomController();
		$controller->ProcessRequest($actionName);
		break;
	case 'event':
		$controller = new EventController();
		$controller->ProcessRequest($actionName);
		break;
	default:
		ToErrorJson('Controller not found');
}