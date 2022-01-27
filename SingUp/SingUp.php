<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="SingUp.css">
    <title>SingUp</title>
</head>
<body>
    <?php
        session_start();
        if (isset($_SESSION['emailNotCad'])) {
            $_SESSION['emailNotCad'] = false;
        }
    ?>
    <section>
        <fieldset>
            <legend><b>Sistema de Login</b></legend>
            <form method="post" action="../DataBase/Cadastrar.php">
                <div class="inputbox">
                    <input type="text" name="name" required class="input">
                    <label class="label" for="username">
                        Username
                        <?php
                            if (!empty($_SESSION['nameCad']) && $_SESSION['nameCad']) {
                                echo "<span style='color: red; font-weight: bold;' >já cadastrado!</span>";
                            }
                            
                        ?>
                    </label>
                </div>
                <div class="inputbox">
                    <input type="email" name="email" class="input" required>
                    <label class="label" for="email">
                        E-mail
                        <?php
                            if (!empty($_SESSION['emailCad']) && $_SESSION['emailCad']) {
                                echo "<span style='color: red; font-weight: bold;' >já cadastrado!</span>";
                            }
                            
                        ?>   
                    </label>
                </div>
                <div class="inputbox">
                    <input type="password" name="password" class="input" required>
                    <label class="label" for="password">Password</label>
                </div>
                <input class="submit" type="submit" value="Cadastrar">
                <div class="singUp">
                    <label for="cadastrar">
                        Já possui conta?
                    </label>
                    <a href="../Login/Login.php">Entre</a>
                </div>
            </form>
        </fieldset>
        
    </section>
</body>
</html>