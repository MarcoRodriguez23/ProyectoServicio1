<?php
function conectarDB() : mysqli{
    try {
        $hostname="localhost";
    $username="root";
    $password="upiicsa23";
    $database="inmobiliariagallardo";
    $db= mysqli_connect($hostname,$username,$password,$database);

        if(!$db){
            // echo "No se conecto";
            exit;
        }
        else{
            return $db;
        }
    } catch (\Throwable $th) {
        //throw $th;
    }
    
}
