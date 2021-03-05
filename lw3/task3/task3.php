<?php

header("Content-Type: text/plain");
$password = isset($_GET['password']) ? $_GET['password'] : 0; // костыли, костыли, костылёчки
if (preg_match('/^.*[\W].*$/', $password) or $password === 0 or $password == "") // костыли, костыли, костылёчки
{
    echo ($password === 0) ? "Parameter 'password' is not found.\n" : "Invalid password entered. Try again. \nAvailable characters: a-z(A-Z), 0-9.\n";
}
else
{
    $passStrengh = 0;
    $len = strlen($password);
    $passStrength = $len * 4;
    $passStrength += substr_count($password, '/\d/') * 4; // просто без комментариев. Так надо уметь... substr_count ( string $haystack , string $needle , int $offset = 0 , int|null $length = null ) : int
    $test = '/^.*[0-9]+.*$/';                                       // substr_count ( string $haystack , STRING $needle , int $offset = 0 , int|null $length = null ) : int
    VAR_dump($test);
    $passStrength += substr_count($password, '/[^A-Z]/') * 2;
    $passStrength += substr_count($password, '/[^a-z]/') * 2;
    $passStrength -= preg_match('/\d/', $password) ? 0 : $len;
    $passStrength -= preg_match('/\D/', $password) ? 0 : $len;
    foreach (count_chars($password, 1) as $value)
    {
        $passStrength -= ($value > 1) ? $value : 0;
    }
    echo "Password Strength: $passStrength";
}