<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los terrenos
    $query = "SELECT * FROM terrenos";
    $terrenos = mysqli_query($db, $query);

    include 'templates/header.php';

?>

    <main>
        <div class="banner" id="bannerTerrenos">
        </div>
        <h4 class="introduccion">
            
        </h4>
        <div class="contenedor principal-der">
            <div class="imagen-principal">
                <img loading="lazy" src="build/img/dimensiones.png" alt="terrenos">
            </div>
            <div class="texto-principal">
                <p>
                    Una de las mejores inversiones que podrías hacer está a solo un clic de distancia, recuerda que uno de nuestros asesores especializados en venta o renta de departamentos siempre estará disponible para brindarte ayuda personalizada.
                </p>
            </div>
            
        </div>
        <div class="anuncios anunciosD">
            <!-- aqui se va ir generando los anuncios de los terrenos -->
            <?php
            while ($row = mysqli_fetch_assoc($terrenos)): ?>
                <div class="anuncio">
                     
                    <a href="departamento.php?id=<?php echo $row['id']; ?>">
                        <?php
                        $unaImagen=true;
                            foreach (glob("build/img/terrG/${row['id']}/*.webp") as $filename): ?>
                                <?php if($unaImagen===true) : ?>
                                    <img loading="lazy" src="<?php echo $filename; ?>" alt="terreno <?php echo $row['id']; ?>">
                                <?php
                                    $unaImagen=false;
                                endif; ?> 
                        <?php endforeach;?>
                        <div class="info-anuncio">
                            <p class="precio">
                                <?php echo  "$ ".$row['precio']; ?>
                            </p>
                            <h2>
                                <?php echo $row['calle'].", ".$row['colonia'].", ".$row['delegacion'] ; ?>
                            </h2>
                            
                        </div>
                    </a> 
                </div>
            <?php endwhile; ?>
        </div>
    </main>


<?php
    mysqli_close($db);
    include 'templates/footer.php';