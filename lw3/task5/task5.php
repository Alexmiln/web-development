<?php

header("Content-Type: text/plain");
$email = isset($_GET['email']) ? $_GET['email'] : null;
 if (($email !== null) and ($email !== ''))
{
    echo is_file("C:/web/server2go/htdocs/lw3/task4/data/$email.txt") ? file_get_contents("data/$email.txt") : "The requested data was not found.\n";
}
else
{
    echo "Parameter 'email' not found.";
} 