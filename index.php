<?php
    require 'templates/config/conexion.php';
    $db = conectarDB();
    //obteniendo los departamentos
    $ConsultaD = "SELECT id FROM departamentos";
    $ConsultaT = "SELECT id FROM terrenos";
    $ConsultaI = "SELECT id FROM inmuebles";
    $dep = mysqli_query($db, $ConsultaD);
    $inm = mysqli_query($db, $ConsultaI);
    $terr = mysqli_query($db, $ConsultaT);

    include 'templates/header.php';
?>

    <main id="index">
        <div class="banner" id="bannerIndex">
        </div>
        <div class="contenedor principal-izq">
            <div class="texto-principal">
                <!-- <h2>Gallardo <span>Holdings</span></h2> -->
                <p>
                Inmobiliaria Gallardo cuenta con extensa experiencia en la venta de casas, departamentos o terrenos, misma que nos ha llevado a consolidarnos como una de las mejores empresas de bienes raíces a nivel nacional preocupándonos principalmente, por añadir un valor extraordinario a tu siguiente inversión inmobiliaria.
                </p>
                <a href="servicios.php" class="boton">Explorar</a>
            </div>
            <div class="imagen-principal">
                <picture>
                    <source srcset="build/img/conocenos.webp" type="image/webp">
                    <source srcset="build/img/conocenos.jpg" type="image/jpeg">
                    <img loading="lazy" src="build/img/conocenos.jpg" alt="familia feliz">
                </picture>
            </div>
        </div>
    </main>

    <!-- <section class="resumenProductos contenedor">
        <div>
            <img src="build/img/casa.png" alt="Inmuebles">
            <h3>
                Inmuebles
            </h3>
            <p>
                Encuentra el inmueble perfecto para tu futuro, desde una casa hasta una bodega para la expansión de tu negocio.
            </p>
        </div>
        <div>
            <img src="build/img/departamenmto.png" alt="Departamentos">
                <h3>
                    Departamentos
                </h3>
            <p>
                ¿Buscas rentar o comprar un departamento?, encuentra la mejor opción para ti dentro de nuestro catálogo de departamentos. Todo inicia con una conversación, uno de nuestros asesores de ayudará a despegar tus dudas.
            </p>
        </div>
        <div>
            <img src="build/img/dimensiones.png" alt="Terrenos">
                <h3>
                    Terrenos
                </h3>
            <p>
                Invierte en un bien que puede acrecentar su plusvalía en un futuro, así como invertir en un bien que puedes adaptar a cualquiera de tus necesidades
            </p>
        </div>
    </section> -->



    <section class="contenedor carrousel">
        <h2>Inmuebles</h2>
        <div class="carrousel-contenedor" >
            <button aria-label="Anterior" class="carrousel__anterior" id="anterior1">
                <img src="build/img/flecha-izquierda.png" alt="">
            </button>
            <div class="carrousel-items" id="C-inmuebles">
                <!-- <aqui se van a ir agregando las imagenes -->
                <?php while($row = mysqli_fetch_assoc($inm)): ?>
                        <?php
                            $unaImagen=true;
                                foreach (glob("build/img/inmG/${row['id']}/*.webp") as $filename): ?>
                                    <?php if($unaImagen===true) : ?>
                                        <img loading="lazy" src="<?php echo $filename; ?>" alt="inmueble <?php echo $row['id']; ?>">
                                    <?php
                                        $unaImagen=false;
                                    endif; ?> 
                        <?php endforeach;?>
                    <?php endwhile; ?>
            </div>
            <button aria-label="Siguiente" class="carrousel__siguiente" id="siguiente1">
                <img src="build/img/flecha-correcta.png" alt="">
            </button>
            <div class="carrousel-indicadores" role="tablist" id="indicadores1"></div>
        </div>
        

        </div>
        <p>
            Encuentra el inmueble perfecto para tu futuro, desde una casa hasta una bodega para la expansión de tu negocio.
        </p>
        <a href="inmuebles.php" class="boton">Conoce más sobre los inmuebles</a>
    </section>
    
    <section class="contenedor carrousel">
        <h2>Departamentos</h2>
        <div class="carrousel-contenedor">
            <button aria-label="Anterior" class="carrousel__anterior" id="anterior2">
                <img src="build/img/flecha-izquierda.png" alt="">
            </button>
            <div class="carrousel-items" id="C-departamentos">
                <!-- <aqui se van a ir agregando las imagenes -->
                    <?php while($row = mysqli_fetch_assoc($dep)): ?>
                        <?php
                            $unaImagen=true;
                                foreach (glob("build/img/depG/${row['id']}/*.webp") as $filename): ?>
                                    <?php if($unaImagen===true) : ?>
                                        <img loading="lazy" src="<?php echo $filename; ?>" alt="departamento <?php echo $row['id']; ?>">
                                    <?php
                                        $unaImagen=false;
                                    endif; ?> 
                        <?php endforeach;?>
                    <?php endwhile; ?>
            </div>
            <button aria-label="Siguiente" class="carrousel__siguiente" id="siguiente2">
                <img src="build/img/flecha-correcta.png" alt="">
            </button>
            <div class="carrousel-indicadores" role="tablist" id="indicadores2"></div>
        </div>
        

        </div>
        <p>
            ¿Buscas rentar o comprar un departamento?, encuentra la mejor opción para ti dentro de nuestro catálogo de departamentos. Todo inicia con una conversación, uno de nuestros asesores de ayudará a despegar tus dudas.
        </p>
        <a href="departamentos.php" class="boton">Conoce más sobre los departamentos</a>
    </section>

    <section class="contenedor carrousel">
        <h2>Terrenos</h2>
        <div class="carrousel-contenedor">
            <button aria-label="Anterior" class="carrousel__anterior" id="anterior3">
                <img src="build/img/flecha-izquierda.png" alt="">
            </button>
            <div class="carrousel-items" id="C-terrenos">
                <!-- <aqui se van a ir agregando las imagenes -->
                <?php while($row = mysqli_fetch_assoc($terr)): ?>
                        <?php
                            $unaImagen=true;
                                foreach (glob("build/img/terrG/${row['id']}/*.webp") as $filename): ?>
                                    <?php if($unaImagen===true) : ?>
                                        <img loading="lazy" src="<?php echo $filename; ?>" alt="terreno <?php echo $row['id']; ?>">
                                    <?php
                                        $unaImagen=false;
                                    endif; ?> 
                        <?php endforeach;?>
                    <?php endwhile; ?>
            </div>
            <button aria-label="Siguiente" class="carrousel__siguiente" id="siguiente3">
                <img src="build/img/flecha-correcta.png" alt="">
            </button>
            <div class="carrousel-indicadores" role="tablist" id="indicadores3"></div>
        </div>
        

        </div>
        <p>
            Invierte en un bien que puede acrecentar su plusvalía en un futuro, así como invertir en un bien que puedes adaptar a cualquiera de tus necesidades
        </p>
        <a href="terrenos.php" class="boton">Conoce más sobre los terrenos</a>
    </section>
    

    <section class="seccion-testimoniales">
        <h2>Testimoniales</h2>
        <div class="testimoniales">
            <div class="testimonial">
                <blockquote>
                    Tras 3 años buscando departamento y no concretar nada, Inmobiliaria Gallardo me ayudó a encontrar mi espacio ideal
                </blockquote>
                <p>- Natalia Rodríguez</p>
            </div>

            <div class="testimonial">
                <blockquote>
                    Logré vender mi terreno con ayuda de sus asesores, su profesionalismo es evidente.
                </blockquote>
                <p>- Rogelio Mendoza</p>
            </div>

            <div class="testimonial">
                <blockquote>
                    Me urgía encontrar una bodega para poder guardar mis productos e Inmobiliaria Gallardo me ayudo en tiempo récord.
                </blockquote>
                <p>- Erika Morales</p>
            </div>
        </div>
        
    </section>
    <!-- <div class="reconocimientoIconos">
        <div>
            <p>
                Iconos diseñados por
                <a href="https://www.flaticon.es/autores/kiranshastry" title="Kiranshastry">Kiranshastry</a>
                y
                <a href="https://www.flaticon.es/autores/vichanon-chaimsuk" title="Vichanon Chaimsuk">Vichanon Chaimsuk</a>
                en
                <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a>
            </p>
            
        </div>
    </div> -->

<?php
    mysqli_close($db);
    include 'templates/footer.php';