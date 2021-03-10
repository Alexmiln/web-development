<?php

header('Content-Type: text/plain');
$email = isset($_GET['email']) ? $_GET['email'] : null;
 if (($email !== null) and ($email !== ''))
{
    echo is_file("data/$email.txt") ? file_get_contents("data/$email.txt") : "The requested data was not found.\n";
}
else
{
    echo "Parameter 'email' not found.";
} 