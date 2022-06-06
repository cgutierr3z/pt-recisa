<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con user, contraseña y nombre de la BD
$host = "localhost"; 
$user = "root"; 
$pass = "";
$dbname = "pt-recisa-db";

$conn = new mysqli($host, $user, $pass, $dbname);

// Consulta todos los registros de la tabla empleados
if (isset($_GET["query-asesor"]) && $_GET["query-asesor"]==null) {
    $stm = mysqli_query($conn,"SELECT * FROM asesor ");
    if (mysqli_num_rows($stm) > 0){
        $rs = mysqli_fetch_all($stm,MYSQLI_ASSOC);
        echo json_encode($rs);
        header("HTTP/1.1 200 OK");
        exit();
    } else { 
        echo json_encode([["success"=>0]]);
        exit();
    }
}

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["query-asesor"]) && $_GET["query-asesor"]!=null){
    $stm = mysqli_query($conn,"SELECT * FROM asesor WHERE id=".$_GET["query-asesor"]);
    if(mysqli_num_rows($stm) > 0){
        $rs = mysqli_fetch_all($stm,MYSQLI_ASSOC);
        echo json_encode($rs);
        header("HTTP/1.1 200 OK");
        exit();
    }else{
        echo json_encode(["success"=>0]);
        exit();
    }
}

//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["del-asesor"])){
    $stm = mysqli_query($conn,"DELETE FROM asesor WHERE id=".$_GET["del-asesor"]);
    if($stm){
        echo json_encode(["success"=>1]);
        exit();
    }else{
        echo json_encode(["success"=>0]);
        exit();
    }
}

//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["add-asesor"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    if(($apellido!="")&&($nombre!="")){        
        $stm = mysqli_query($conn,"INSERT INTO asesor(nombre,apellido) VALUES('$nombre','$apellido') ");
        echo json_encode(["success"=>1]);
    }
    exit();
}

// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["update-asesor"])){
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["update-asesor"];
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    
    $stm = mysqli_query($conn,"UPDATE asesor SET nombre='$nombre',apellido='$apellido' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

?>
