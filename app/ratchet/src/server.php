<?php

use Ratchet\Server\IoServer;
use RatchetTest\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
    new Chat(),
    8080
);

echo "Starting websocket server on port 8080...\n";

$server->run();
