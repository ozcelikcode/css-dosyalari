<?php 

    $host       = "localhost";
    $database   = "bloog";
    $user       = "root";
    $password   = "";

try{
    $db = new PDO("mysql:host=$host;dbname=$database;charset=utf8;",$user,$password);
}catch(PDOExeption $error){
    echo $error->getMessage();
}

?>