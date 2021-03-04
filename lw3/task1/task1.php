<?php

header("Content-Type: text/plain");
echo isset($_GET['text']) ? preg_replace('/ +/', ' ', trim($_GET['text'])) : 'Parameter not found';
