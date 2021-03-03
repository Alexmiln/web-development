<?php

header("Content-Type: text/plain");
$text = $_GET['text'] ? preg_replace('/ +', ' ', trim($_GET['text'])) : 'Parameter not found';
echo $text;