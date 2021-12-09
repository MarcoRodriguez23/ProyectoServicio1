<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los servicios
    $query = "SELECT * FROM servicios";
    $servicios = mysqli_query($db, $query);

    include 'templates/header.php';
?>

    <main>
        <picture>
            <source srcset="build/img/SERVICIOS.webp" type="image/webp">
            <source srcset="build/img/SERVICIOS.jpg" type="image/jpeg">
            <img src="build/img/SERVICIOS.jpg" alt="anuncio" loading="lazy">
        </picture>
        <h4 class="introduccion">
            Permítenos ser parte de tu siguiente paso hacia el futuro y guiarte con nuestra experiencia a concretar una de tus mejores inversiones en la vida.
        </h4>
        <div class="anuncios" id="servicios">
            <?php while ($row = mysqli_fetch_assoc($servicios)) : ?>
                <div class="anuncio">
                    <a href="servicio.php?id=<?php echo $row['id'] ?>" class="info-anuncio">
                        <h2><?php echo $row['titulo'] ?></h2>
                    </a>
                    <picture>
                        <source srcset="build/img/MAIN.webp" type="image/webp">
                        <source srcset="build/img/MAIN.jpg" type="image/jpeg">
                        <img loading="lazy" src="build/img/MAIN.jpg" alt="<?php $row['id']; ?>">
                    </picture>
                </div>
            <?php endwhile;?>
        </div>
        
    </main>

<?php
    mysqli_close($db);
    include 'templates/footer.php';
    