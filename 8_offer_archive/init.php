<?php

if ($_SERVER['CONTENT_TYPE'] !== 'application/json') {
    $_POST = json_decode(file_get_contents('php://input'), true);
}
