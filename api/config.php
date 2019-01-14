<?php

date_default_timezone_set('America/Sao_Paulo');

define('CONTEXT_NAME', '/fisio/api/');
define('LOG_DIR', $_SERVER['DOCUMENT_ROOT'] . CONTEXT_NAME . '_log/');

define('SERVERNAME', 'localhost');
define('USERNAME', 'root');
define('PASSWORD', '');
define('DBNAME', 'fisio_db');

define('ENV', 'Test');

define('JWT_SECRET', 'H@C$zEW%c?-Y8[[Hge634BYED');
define('JWT_ISSUER', 'vitoriabari.com.br');
define('JWT_AUDIENCE', 'vitoriabari.com.br');
define('JWT_TTL', 28800);