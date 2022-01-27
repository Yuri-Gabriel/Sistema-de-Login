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

    $vazio = true;

    session_start();
    if (isset($selectName[0]['nome'])) {
        if ($select[0]['nome'] == $name) {
            $_SESSION['nameCad'] = true;
        } else {
            $vazio = false;
        }
    }
    if (isset($selectEmail[0]['email'])) {
        if ($select[0]['email'] == $email) {
            $_SESSION['emailCad'] = true;
        } else {
            $vazio = false;
        }
    }
    //header("Location: ../SingUp/SingUp.php");
    if ($vazio) {
        if (isset($_SESSION['emailCad'])) {
            $_SESSION['emailCad'] = false;
        }
        if (isset($_SESSION['nameCad'])) {
            $_SESSION['nameCad'] = false;
        }
        if (isset($_SESSION['emailNotCad'])) {
            $_SESSION['emailNotCad'] = true;
        }
        
        echo "vazio";
    }
        

    //Insert($conn, $values);

    //header("Location: ../Login/Login.html");
?>