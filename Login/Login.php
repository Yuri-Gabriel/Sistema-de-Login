<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Login.css">
    <title>Login</title>
</head>
<body>
    <?php
        session_start();
        if (isset($_SESSION['emailCad'])) {
            $_SESSION['emailCad'] = false;
        }
        if (isset($_SESSION['nameCad'])) {
            $_SESSION['nameCad'] = false;
        }
    ?>
    <section>
        <fieldset>
            <legend><b>Sistema de Login</b></legend>
            <form method="post" action="../DataBase/verificarLogin.php">
                <div class="inputbox">
                    <input type="email" name="email" class="input" required>
                    <label class="label" for="email">
                        E-mail
                        <?php
                            if (!empty($_SESSION['emailNotCad']) && $_SESSION['emailNotCad']) {
                                echo "<span style='color: red; font-weight: bold;' >não cadastrado!</span>";
                            }
                            
                        ?>   
                    </label>
                </div>
                <div class="inputbox">
                    <input type="password" name="password" class="input" required>
                    <label class="label" for="password">Password</label>
                </div>
                <input id="submit" name="submit" type="submit" value="Entrar">
                <div class="singUp">
                    <label for="cadastrar">
                        Não possui conta?
                    </label>
                    <a href="../SingUp/SingUp.php">Cadastre-se</a>
                </div>
            </form>
        </fieldset>
    </section>
</body>
</html>