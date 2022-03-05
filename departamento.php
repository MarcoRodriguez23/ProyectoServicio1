<?php
    require 'templates/config/conexion.php';    
    
    $id=$_GET['id'];
    $id=filter_var($id,FILTER_VALIDATE_INT);
    // var_dump($id);

    if(!$id){
        header('Location: /');
    }
    
    $db = conectarDB();
    $query = "SELECT * FROM departamentos WHERE id= ${id}";
    $resultado = mysqli_query($db, $query);
    $departamento = mysqli_fetch_assoc($resultado);

    if($resultado->num_rows === 0){
        header('Location: /');
    }

    include 'templates/header.php';


?>

<main class="contenedor carrousel ">
    <h2 id="tituloDep"><?php echo $departamento['calle'].", ".$departamento['colonia'].", ".$departamento['delegacion']; ?></h2>
    <div class="carrousel-contenedor sombra carrousel-individual">
        <button aria-label="Anterior" class="carrousel__anterior" id="anterior-seleccion">
            <img src="build/img/flecha-izquierda.png" alt="">
        </button>
        <div class="carrousel-items" id="C-seleccion">
            <!-- <aqui se van a ir agregando las imagenes -->
                <?php
                    foreach (glob("build/img/depG/${departamento['id']}/*.webp") as $filename): ?>
                            <img class="carrousel-elemento" loading="lazy" src="<?php echo $filename; ?>" alt="departamento">
                <?php endforeach;?>
        </div>
        <button aria-label="Siguiente" class="carrousel__siguiente" id="siguiente-seleccion">
            <img src="build/img/flecha-correcta.png" alt="">
        </button>
        <div class="carrousel-indicadores" role="tablist" id="indicadores-seleccion"></div>
    </div>
    

    </div>
    <div class="informacion">
        <h4>Información sobre el Departamento</h4>
        <div class="datos">
            <div class="informacion_ladoIz">
                <p><span>$ <?php echo $departamento['precio']; ?></span></p>
                <p>Año de construcción: <span> <?php echo $departamento['año']; ?> </span></p>
                <p>Espacios de estacionamiento: <span> <?php echo $departamento['estacionamientos']; ?></span></p>
                <p>mt2: <span> <?php echo $departamento['mt2']; ?></span></p>
            </div>
            <div class="informacion_ladoDer">
                <p>Habitaciones: <span> <?php echo $departamento['habitaciones']; ?> </span></p>
                <p>Habitaciones de servicio: <span> <?php echo $departamento['servicioH']; ?></span></p>
                <p>Patios de servicio: <span> <?php echo $departamento['servicioP']; ?></span></p>
                <p>Baños: <span> <?php echo $departamento['baños']; ?></span></p>
            </div>
        </div>
        <a href="<?php echo $departamento['ubicacion'] ?>" class="boton" target="_blank">Conozca la ubicación</a>
    </div>
    <section class="ubicacion contenedor sombra">
        <h3>Ubicación</h3>
        <!-- <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto non quia ducimus temporibus amet atque hic iste, quo ullam aliquid fugiat possimus autem, sapiente distinctio asperiores aperiam eum facere.
        </p> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.0899007228506!2d-99.15182182807233!3d19.36136581681272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffc9e53d8deb%3A0xed620e231dadd1ac!2sAv.%20Popocat%C3%A9petl%20158%2C%20Portales%20Nte%2C%20Benito%20Ju%C3%A1rez%2C%2003300%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1640037359833!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section>
    <a href="departamentos.php" class="boton">Volver</a>
</main>




<?php
mysqli_close($db);
include 'templates/footer.php';