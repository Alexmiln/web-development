<?php

header("Content-Type: text/plain");
$first_name = isset($_GET['first_name']) ? $_GET['first_name'] : "..."; //'пробел' (для task5)
$last_name = isset($_GET['last_name']) ? $_GET['last_name'] : "...";
$age = isset($_GET['age']) ? $_GET['age'] : "...";
$email = isset($_GET['email']) ? $_GET['email'] : null;
if (($email !== null) and ($email !== ''))
{
    if (filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $fEmail = fopen("data/$email.txt", "w");
        fwrite($fEmail, "Email: $email\r\n");
        fwrite($fEmail, "First name: $first_name\r\n");
        fwrite($fEmail, "Last name: $last_name\r\n");
        fwrite($fEmail, "Age: $age");
        fclose($fEmail);  
    }
    else
    {
        echo "Invalid email entered.";
    }
}
else
{
    echo "Parameter 'email' not found.";
}