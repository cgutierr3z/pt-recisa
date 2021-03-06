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


//CRUD ASESORES
// Consulta todos los asesores
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

// Consulta asesor por id
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

// Borra asesor por id
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

// Agregar asesor
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

// Actualiza asesor
if(isset($_GET["edit-asesor"])){
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["edit-asesor"];
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    
    $stm = mysqli_query($conn,"UPDATE asesor SET nombre='$nombre',apellido='$apellido' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}


//CRUD ESTACIONES
// Consulta todas las estacion
if (isset($_GET["query-estacion"]) && $_GET["query-estacion"]==null) {
    $stm = mysqli_query($conn,"SELECT * FROM estacion ");
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

// Consulta estacion por id
if (isset($_GET["query-estacion"]) && $_GET["query-estacion"]!=null){
    $stm = mysqli_query($conn,"SELECT * FROM estacion WHERE id=".$_GET["query-estacion"]);
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

// Borra estacion por id
if (isset($_GET["del-estacion"])){
    $stm = mysqli_query($conn,"DELETE FROM estacion WHERE id=".$_GET["del-estacion"]);
    if($stm){
        echo json_encode(["success"=>1]);
        exit();
    }else{
        echo json_encode(["success"=>0]);
        exit();
    }
}

// Agregar estacion
if(isset($_GET["add-estacion"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $stockTarjeta=$data->stockTarjeta;
    $saldoCaja=$data->saldoCaja;
    if(($nombre!="")&&($stockTarjeta!="")&&($saldoCaja!="")){        
        $stm = mysqli_query($conn,"INSERT INTO estacion(nombre,stock_tarjeta, saldo_caja) VALUES('$nombre','$stockTarjeta','$saldoCaja') ");
        echo json_encode(["success"=>1]);
    }
    exit();
}

// Actualiza estacion
if(isset($_GET["edit-estacion"])){
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["edit-estacion"];
    $nombre=$data->nombre;
    $stockTarjeta=$data->stockTarjeta;
    $saldoCaja=$data->saldoCaja;
    
    $stm = mysqli_query($conn,"UPDATE estacion SET nombre='$nombre',stock_tarjeta='$stockTarjeta',saldo_caja='$saldoCaja' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}


//CRUD VENTAS
// Consulta todas las ventas
if (isset($_GET["query-venta"]) && $_GET["query-venta"]==null) {
    $stm = mysqli_query($conn,"SELECT venta.id, asesor.nombre AS asesor_n, estacion.nombre AS estacion_n, venta.cantidad_venta, venta.total_venta, venta.fecha_venta FROM venta, asesor, estacion WHERE venta.id_asesor = asesor.id && venta.id_estacion = estacion.id; ");
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

// Borra venta por id
if (isset($_GET["del-venta"])){
    $stm = mysqli_query($conn,"SELECT * FROM venta WHERE id=".$_GET["del-venta"]);
    $row = mysqli_fetch_row($stm);
    $estacion = $row[2];
    $stm2 = mysqli_query($conn,"SELECT * FROM estacion WHERE id='$estacion'");
    $row2 = mysqli_fetch_row($stm2);
    $newStock = $row2[2]+$row[3];
    $newTotal = $row2[3]-$row[4];
    $stm3 = mysqli_query($conn,"UPDATE estacion SET stock_tarjeta='$newStock',saldo_caja='$newTotal' WHERE id='$estacion'");

    $stm4 = mysqli_query($conn,"DELETE FROM venta WHERE id=".$_GET["del-venta"]);
    if($stm4){
        
        echo json_encode(["success"=>1]);
        exit();
    }else{
        echo json_encode(["success"=>0]);
        exit();
    }
}

// Agregar venta
if(isset($_GET["add-venta"])){
    $data = json_decode(file_get_contents("php://input"));
    $asesor=$data->asesor;
    $estacion=$data->estacion;
    $cantidad=$data->cantidad;
    $total=$data->total;
    if(($asesor!="")&&($estacion!="")&&($cantidad!="")&&($total!="")){        
        $stm = mysqli_query($conn,"INSERT INTO venta(id_asesor,id_estacion, cantidad_venta, total_venta) VALUES('$asesor','$estacion','$cantidad','$total') ");
        $stm2 = mysqli_query($conn,"SELECT * FROM estacion WHERE id='$estacion'");
        $row = mysqli_fetch_row($stm2);
        $newStock = $row[2]-$cantidad;
        $newTotal = $row[3]+$total;
        $stm3 = mysqli_query($conn,"UPDATE estacion SET stock_tarjeta='$newStock',saldo_caja='$newTotal' WHERE id='$estacion'");
        echo json_encode(["success"=>1]);
    }
    exit();
}


?>
