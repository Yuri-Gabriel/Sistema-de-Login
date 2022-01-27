<?php
    if (isset($_POST['submit']) &&
        isset($_POST['email']) &&
        isset($_POST['password'])) {
        
        include_once('./db.php');

        session_start();

        $email = $_POST['email'];
        $password = $_POST['password'];

        $conn = ConectSql("localhost", "teste", "root", "");

        $sql = "SELECT * FROM cadastro
                WHERE email = '$email' 
                and senha = '$password'
                ORDER BY id";

        $select = Select($conn, $sql);
        
        if (!empty($select)) {
            foreach($select as $row) {
                $_SESSION['nome'] = $row['nome'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['senha'];

                if (isset($_SESSION['emailNotCad'])) {
                    $_SESSION['emailNotCad'] = false;
                }

                header("Location: ../Home/Home.php");
            }
        } else {
            unset($_SESSION['email']);
            unset($_SESSION['password']);

            $_SESSION['emailNotCad'] = true;

            header("Location: ../Login/Login.php");
        }

    } else {
        header('Location: ../Login/Login.php');
    }
?>