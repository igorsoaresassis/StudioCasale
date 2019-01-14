<?php

use \Firebase\JWT\JWT;

function CreateLog($msg)
{
	$date = date('Y_m_d');
	$time = date('H:i:s T');
	$ip = $_SERVER ['REMOTE_ADDR'];

	// Nome do arquivo:
	$file = LOG_DIR . 'Log-$date.log';

	// Texto a ser impresso no log:
	$text = '[$time] \t [$ip] \t $msg \n';

	$handler = fopen('$file', 'ab');
	fwrite($handler, $text);
	fclose($handler);
}

function WrapData($data, $msg = '', $hasError = false)
{
	$result = array('data' => $data, 'msg' => $msg, 'hasError' => $hasError);
	return $result;
}

function ToJson($data)
{
	header('Content-type: application/json');

	echo json_encode($data);
	exit;
}

function ToWrappedJson($data, $msg = '', $hasError = false)
{
	ToJson(WrapData($data, $msg, $hasError));
}

function ToErrorJson($msg)
{
	ToJson(WrapData(null, $msg, true));
}

function ToExceptionJson(Exception $e)
{
	$msg = $e->getMessage();
	CreateLog($msg);
	ToJson(WrapData(null, $msg, true));
}

function CreateJwtToken(User &$user) {
	$token = array(
		"iss" => JWT_ISSUER,
		"aud" => JWT_AUDIENCE,
		"iat" => time(),
		"exp" => time() + JWT_TTL,
		"data" => array(
			"userId" => $user->userId,
			"userName" => $user->userName,
			"userAdmin" => $user->userAdmin
		)
	);

	return JWT::encode($token, JWT_SECRET);
}

function GetJwtToken(){
	$header = null;
	if (isset($_SERVER['Authorization'])) {
		$header = trim($_SERVER["Authorization"]);
	}
	else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
		$header = trim($_SERVER["HTTP_AUTHORIZATION"]);
	} elseif (function_exists('apache_request_headers')) {
		$requestHeaders = apache_request_headers();
		// Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
		$requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
		//print_r($requestHeaders);
		if (isset($requestHeaders['Authorization'])) {
			$header = trim($requestHeaders['Authorization']);
		}
	}
	return $header;
}

function SaveLoggedUser($userData) {
	$_SESSION['loggedUser'] = $userData;
}

function GetLoggedUser() {
	$loggedUser = new User();
	$loggedUser->FillByObject($_SESSION['loggedUser']);
	return $loggedUser;
}


