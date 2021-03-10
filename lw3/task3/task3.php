<?php

header('Content-Type: text/plain');
$password = isset($_GET['password']) ? $_GET['password'] : 0;
if (preg_match('/^.*[\W].*$/', $password) or $password === 0 or $password === "")
{
    echo ($password === 0) ? "Parameter 'password' is not found." : "Invalid password entered. Try again.\nAvailable characters: a-z(A-Z), 0-9.";
}
else
{
    $passStrengh = 0;
    $len = strlen($password);
    $passStrength = $len * 4;
    $passStrength += ($len - strlen(preg_replace('/\d/', '', $password))) * 4;
    $passStrength += ($len - strlen(preg_replace('/[A-Z]/', '', $password))) * 2;
    $passStrength += ($len - strlen(preg_replace('/[a-z]/', '', $password))) * 2;
    $passStrength -= preg_match('/\d/', $password) ? 0 : $len;
    $passStrength -= preg_match('/\D/', $password) ? 0 : $len;
    foreach (count_chars($password, 1) as $value)
    {
        $passStrength -= ($value > 1) ? $value : 0;
    }
    echo "Password Strength: $passStrength";
}