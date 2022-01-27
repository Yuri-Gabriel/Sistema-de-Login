<?php

try {

    function ConectSql($host, $dbname, $user, $password) {
        $conection = new Pdo(
            "mysql:host=$host;dbname=$dbname", $user, $password
        );
        $conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conection;
    }

    function Select($conection, $sql) {
        if ($sql === "") {
            $sql = "SELECT * FROM cadastro
                ORDER BY id";
        }
        
        $result = $conection->query($sql);

        $rows = $result->fetchAll(PDO::FETCH_ASSOC);

        return $rows;
    }

    function Insert($conection, $values) : void {
        $sql = sprintf("INSERT INTO cadastro VALUES (default, %s)", $values);

        $prepare = $conection->prepare($sql);
        $prepare->execute();
    }

    function Update($conection, $nome, $id) : void {
        $conection->exec("UPDATE cadastro SET nome='$nome' WHERE id='$id'");
    }

    function Delete($conection, $id) : void {
        $conection->exec("DELETE FROM cadastro WHERE id=$id");
    }

} catch (PDOException $e) {
    echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
}
 