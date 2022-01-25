<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Home.css">
    <title>Home</title>
</head>
<body>
    <?php
        session_start();
        if (!isset($_SESSION['email']) == true &&
            !isset($_SESSION['password']) == true) {
            
            unset($_SESSION['email']);
            unset($_SESSION['password']);
            header('Location: ../Login/Login.php');
        }
    ?>
    <section>
        <h1>Logado com sucesso!</h1>
        <div>
            <span>
                Usuario: <?php echo $_SESSION['nome'];?>
            </span>
            <span>
                Email: <?php echo $_SESSION['email'];?>
            </span>
            <a href="./Logout.php">Sair</a>
        </div>
    </section>
</body>
</html>