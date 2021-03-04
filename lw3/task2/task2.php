<?php

header("Content-Type: text/plain");
$parameter = isset($_GET['identifier']) ? $_GET['identifier'] : null;
if (preg_match('/^[a-zA-Z][\w]*$/', $parameter) and $parameter !== null)
{
    echo "Yes,'$parameter' is an identifier.";
}
else
{
    preg_match('/^.*[а-яА-Я].*$/', $parameter) ? ($errors = $errors . "An identifier cannot consist of Cyrillic alphabet.\n") : null;
    preg_match('/^[0-9].*$/', $parameter) ? ($errors = $errors . "An identifier cannot start with a digit.\n") : null;
    preg_match('/^.*[\s\p{P}].*$/', $parameter) ? ($errors = $errors . "An identifier cannot consist of whitespace or punctuation characters.\n") : null;
    ($errors == null) ? $errors = "Wow, you entered a symbol that I didn't anticipate, but trust me, you can't do that either." : null;
    echo isset($parameter[null]) ? "No, '$parameter' is not an identifier. \nReason(s): \n$errors" : "Parameter 'identifier' is not found.";
}