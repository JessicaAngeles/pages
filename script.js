function abrirModal(id) {
    document.getElementById(id).style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// Cierra el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function agregarEventosTarjetas() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            let titulo = this.querySelector("strong").innerText;
            let descripcion = this.querySelector("p").innerText;

            document.getElementById("modal-titulo").innerText = titulo;
            document.getElementById("modal-texto").innerText = descripcion;

            document.getElementById("modal").style.display = "flex";
        });
    });
}

function cambiarContenido(seccion) {
    let contenido = document.getElementById("contenido");

    if (seccion === "inicio") {
        contenido.innerHTML = `
            <h1>Planta de Tratamiento de Aguas Residuales de la FES Acatlán</h1>
    <h2>Objetivo:</h2>
    <p>Consutruir y poner en marcha la operación de la planta de tratamiento de aguas residuales para el riego de las áreas verdes de la FES Acatlán, a fin de minimizar el impacto ecológico, así como coayudar con la preservación del vital líquido suministrado por el pozo.</p>

    <div class="contenido-flex">
        <!-- Sección de Avisos -->
        <div class="avisos">
            <h3>Avisos</h3>
            <div class="avisos-container">
                <img src="aviso1.jpg" alt="Aviso 1" class="aviso-img">
                <img src="aviso2.jpg" alt="Aviso 2" class="aviso-img">
                <img src="aviso3.jpg" alt="Aviso 3" class="aviso-img">
            </div>
            <div class="indicadores">
                <span class="punto" onclick="mostrarAviso(0)"></span>
                <span class="punto" onclick="mostrarAviso(1)"></span>
                <span class="punto" onclick="mostrarAviso(2)"></span>
            </div>
        </div>

        <!-- Sección de Video -->
        <div class="video-container">
                <iframe 
                src="https://www.youtube.com/embed/SEzmvImnuNE" 
                title="Video explicativo sobre la planta de tratamiento" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
    </div>

    <div class="informacion">
        <a href="#" class="card">
            <img src="tratamiento_agua.jpg" alt="Planta de tratamiento">
            <p><strong>TREN DE TRATAMIENTO</strong><br>Descubre el proceso de tratamiento del agua y su impacto positivo.</p>
        </a>

        <a href="#" class="card">
            <img src="sustentabilidad.jpg" alt="Sustentabilidad">
            <p><strong>ASPECTOS ACADÉMICOS</strong><br>Aplicamos tecnologías innovadoras para reducir la huella ecológica.</p>
        </a>

        <a href="#" class="card">
            <img src="equipo_trabajo.jpg" alt="Equipo de trabajo">
            <p><strong>IMPACTO Y VENTAJAS</strong><br>Nuestro personal capacitado garantiza la eficiencia del sistema.</p>
        </a>
    </div>



        `;

setTimeout(() => {
            imagenes = document.querySelectorAll(".aviso-img");
            puntos = document.querySelectorAll(".punto");
            indiceActual = 0;
            cambiarAvisos(); // Reiniciar el slider de imágenes
        }, 100);

        // Asegurarse de que los eventos de clic se vuelvan a agregar a las tarjetas
        setTimeout(agregarEventosTarjetas, 10);
    } else if (seccion === "fes") {
        contenido.innerHTML = `
            <h2>Página en construcción</h2>
            <p>Próximamente información sobre la FES Acatlán.</p>
        `;
    } else if (seccion === "ingresar") {
        contenido.innerHTML = `
            <h2>Página en construcción</h2>
            <p>Próximamente contenido sobre el acceso al sistema.</p>
        `;
    }
}

// Agregar eventos a las tarjetas al cargar la página
document.addEventListener("DOMContentLoaded", agregarEventosTarjetas);



let indiceActual = 0;
let imagenes = document.querySelectorAll(".aviso-img");
let puntos = document.querySelectorAll(".punto");

function mostrarAviso(indice) {
    imagenes.forEach((img, i) => {
        img.style.opacity = i === indice ? "1" : "0";
        puntos[i].classList.toggle("activo", i === indice);
    });
    indiceActual = indice;
}

function cambiarAvisos() {
    mostrarAviso(indiceActual);

    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarAviso(indiceActual);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", cambiarAvisos);

