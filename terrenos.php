<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los servicios
    $query = "SELECT * FROM terrenos";
    $terrenos = mysqli_query($db, $query);

    include 'templates/header.php';

?>

    <main>
        <picture>
            <source srcset="build/img/TERRENOS.webp" type="image/webp">
            <source srcset="build/img/TERRENOS.jpg" type="image/jpeg">
            <img src="build/img/TERRENOS.jpg" alt="anuncio" loading="lazy">
        </picture>
        <h4 class="introduccion">
            Una de las mejores inversiones que podrías hacer está a solo un clic de distancia, recuerda que uno de nuestros asesores especializados en venta o renta de departamentos siempre estará disponible para brindarte ayuda personalizada.
        </h4>
        <div class="anuncios anunciosT">
            <!-- aqui se va ir generando los anuncios de los terrenos -->
            <?php
            while ($row = mysqli_fetch_assoc($terrenos)): ?>
                <div class="anuncio">
                    <a href="terreno.php?id=<?php echo $row['id']; ?>">
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
                            foreach (glob("build/img/terrG/${row['id']}/*.webp") as $filename): ?>
                                <?php if($unaImagen===true) : ?>
                                    <img loading="lazy" src="<?php echo $filename; ?>" alt="terreno <?php echo $row['id']; ?>">
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