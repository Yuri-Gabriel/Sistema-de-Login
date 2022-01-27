<?php
    include_once("./db.php");

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $values = "'$name', '$email', '$password'";

    $conn = ConectSql("localhost", "teste", "root", "");

    $sqlName = "SELECT * FROM cadastro
            WHERE nome = '$name'";
    $sqlEmail = "SELECT * FROM cadastro
            WHERE email = '$email'";

    $selectName = Select($conn, $sqlName);
    $selectEmail = Select($conn, $sqlEmail);

    var_dump($selectName);
    var_dump($selectEmail);

    if (isset($selectName[0]['nome']) and
        $selectName[0]['nome'] == $nome) {
            
        }
?>