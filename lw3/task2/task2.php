<?php

header("Content-Type: text/plain");
isset($_GET('identifier')) ? $parameter = $_GET('identifier') : print "Parameter 'identifier' is not found.";
if preg_match('/^[a-zA-Z][\w]*$/', $parameter)
{
    echo ('The \'identifier\' parameter is an identifier.')
}
else
{
    preg_match('/^.*[а-яА-Я]+.*$/', $parameter) ? $errors = $errors . "The identifier cannot consist of Cyrillic alphabet. \n";
    preg_match('/^[0-9].*$/', $parameter) ? $errors = $errors . "An identificator cannot start with a digit. \n";
    preg_match('/^.*[\s\p{P}]+.*$/', $parameter) ? $errors = $errors . "The identifier cannot consist of whitespace or punctuation characters. \n";
    ($errors == null) ? $errors = "Wow, it's scary to imagine what you've entered. But you can't do that anyway)))";
    echo "Sorry, it\'s not an identificator. \n Reason(s): \n $errors";
}