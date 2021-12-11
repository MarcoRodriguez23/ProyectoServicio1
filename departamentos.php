<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los departamentos
    $query = "SELECT * FROM departamentos";
    $departamentos = mysqli_query($db, $query);

    include 'templates/header.php';

?>

    <main>
        <div class="banner" id="bannerDepartamentos">
        </div>
        <div class="contenedor principal-der">
            <div class="imagen-principal">
                <img loading="lazy" src="build/img/departamenmto.png" alt="departamentos">
            </div>
            <div class="texto-principal">
                <p>
                    Tu siguiente departamento espera por ti, recuerda que uno de nuestros asesores especializados en venta o renta de departamentos siempre estará disponible para brindarte la mejor ayuda personalizada.
                </p>
            </div>
            
        </div>
        <div class="anuncios anunciosD">
            <!-- aqui se va ir generando los anuncios de los departamentos -->
            <?php
            while ($row = mysqli_fetch_assoc($departamentos)): ?>
                <div class="anuncio">
                     
                    <a href="departamento.php?id=<?php echo $row['id']; ?>">
                        <?php
                        $unaImagen=true;
                            foreach (glob("build/img/depG/${row['id']}/*.webp") as $filename): ?>
                                <?php if($unaImagen===true) : ?>
                                    <img loading="lazy" src="<?php echo $filename; ?>" alt="departamento <?php echo $row['id']; ?>">
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