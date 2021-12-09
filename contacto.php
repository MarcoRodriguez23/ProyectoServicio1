<?php
    include 'templates/header.php';

?>

    <main class="formulario-texto">
        <div class="contenedor">
            <h1>Contáctanos</h1>
            <p>
                Por favor, complete los campos a continuación y luego haga clic en enviar.
            </p>
            <p>Estaremos en contacto.</p>
        </div>
        <div class="color-formulario">

            <form class="formulario contenedor">
                <div>
                    <label for="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre Completo" id="nombre" required>
                </div>
                
                <div>
                    <label for="Correo">Correro</label>
                    <input type="email" placeholder="ejemplo@empresa.com" id="Correo" required>
                </div>
    
                <div>
                    <label for="telefono">Whatsapp</label>
                    <input type="tel" placeholder="Número de 10 digitos" id="telefono" required>
                </div>
                
                <div>
                    <label for="empresa">Nombre de la empresa (opcional)</label>
                    <input type="text" placeholder="Nombre de la empresa" id="empresa">
                </div>

                <div>
                    <label for="puesto">Puesto (opcional)</label>
                    <input type="text" placeholder="Puesto en la empresa" id="puesto">
                </div>

                <div>
                    <label for="asunto">Asunto</label>
                    <select name="" id="">
                        <option value="" selected disabled>--Usted esta interesado en--</option>
                        <option value="">Inmueble</option>
                        <option value="">Departamento</option>
                        <option value="">Terreno</option>
                    </select>
                </div>
                
                <div class="mensaje-formulario">
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" placeholder="Tu mensaje"></textarea>
                </div>
                
                
                <input type="submit" value="Enviar" class="boton boton-formulario">
                
                
            </form>
        </div>

        
    </main>

<?php
    include 'templates/footer.php';
