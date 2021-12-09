<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los inmuebles
    $query = "SELECT * FROM inmuebles";
    $inmuebles = mysqli_query($db, $query);

    include 'templates/header.php';

?>

    <main>
        <picture>
            <source srcset="build/img/INMUEBLES.webp" type="image/webp">
            <source srcset="build/img/INMUEBLES.jpg" type="image/jpeg">
            <img src="build/img/INMUEBLES.jpg" alt="anuncio" loading="lazy">
        </picture>
        <h4 class="introduccion">
            La expansión de tu negocio o tu próxima oficina no pueden esperar más, recuerda que uno de nuestros asesores especializados en venta o renta de inmuebles siempre estará disponible para brindarte ayuda personalizada.
        </h4>
        <div class="anuncios anunciosI">
            <!-- aqui se va ir generando los anuncios de los inmuebles -->
            <?php
            while ($row = mysqli_fetch_assoc($inmuebles)): ?>
                <div class="anuncio">
                    <a href="inmueble.php?id=<?php echo $row['id']; ?>">
                        <div class="info-anuncio">
                            <h2>
                                <?php echo $row['calle'].", ".$row['colonia'].", ".$row['delegacion'] ; ?>
                            </h2>
                            <p class="precio">
                                <?php echo  "$ ".$row['precio']; ?>
                            </p>
                        </div>
                    </a>
                    <picture>
                        <?php
                        $unaImagen=true;
                            foreach (glob("build/img/inmG/${row['id']}/*.webp") as $filename): ?>
                                <?php if($unaImagen===true) : ?>
                                    <img loading="lazy" src="<?php echo $filename; ?>" alt="inmueble <?php echo $row['id']; ?>">
                                <?php
                                    $unaImagen=false;
                                endif; ?> 
                        <?php endforeach;?>
                    </picture>   
                </div>
            <?php endwhile; ?>
        </div>
    </main>

<?php
mysqli_close($db);
include 'templates/footer.php';