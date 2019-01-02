<?php

session_start();

//General Include
require_once 'includes.php';

require_once 'model/_includes.php';
require_once 'controller/_includes.php';
require_once 'repository/_includes.php';

$controllerName = isset($_GET['controller']) ? $_GET['controller'] : (isset($_POST['controller']) ? $_POST['controller'] : '');
$actionName = isset($_GET['action']) ? $_GET['action'] : (isset($_POST['action']) ? $_POST['action'] : '');

if (!$controllerName || !$actionName) {
	ToErrorJson('Request not found.');
}

if (ENV != 'Dev' && ($controllerName != 'usuario' || $actionName != 'login')) {

	if (!isset($_SERVER['PHP_AUTH_USER']) ||
		!isset($_SERVER['PHP_AUTH_PW']) ||
		!isset($_SESSION['authData']) ||
		base64_encode($_SERVER['PHP_AUTH_USER'] . ':' . $_SERVER['PHP_AUTH_PW']) != $_SESSION['authData']
	) {
		header('HTTP/1.0 401 Unauthorized');
		ToErrorJson('Access Denied.');
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