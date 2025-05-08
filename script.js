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
        card.addEventListener("click", function (e) {
            e.preventDefault(); // Evita navegación si es un <a href="#">
            let titulo = this.querySelector("strong").innerText;
            let descripcion = this.querySelector("p").innerText;

            document.getElementById("modal-titulo").innerText = titulo;
            document.getElementById("modal-texto").innerText = descripcion;

            document.getElementById("modal").style.display = "flex";
        });
    });
}

// NUEVA LÓGICA PARA CAMBIO DE SECCIONES SIN PERDER CONTENIDO
function cambiarContenido(seccion) {
    const contenido = document.getElementById("contenido");

    // Oculta todas las secciones hijas del contenido
    Array.from(contenido.children).forEach(child => {
        child.style.display = "none";
    });

    // Si los contenedores no existen, se crean dinámicamente
    if (!document.getElementById("seccion-inicio")) {
        const seccionInicio = document.createElement("div");
        seccionInicio.id = "seccion-inicio";
        seccionInicio.innerHTML = contenido.innerHTML; // Copia lo actual
        contenido.innerHTML = ""; // Limpia original
        contenido.appendChild(seccionInicio);
    }

    if (!document.getElementById("seccion-fes")) {
        const fes = document.createElement("div");
        fes.id = "seccion-fes";
        fes.innerHTML = `
            <h2>Página en construcción</h2>
            <p>Próximamente información sobre la FES Acatlán.</p>
        `;
        contenido.appendChild(fes);
    }

    if (!document.getElementById("seccion-ingresar")) {
        const ingresar = document.createElement("div");
        ingresar.id = "seccion-ingresar";
        ingresar.innerHTML = `
            <h2>Página en construcción</h2>
            <p>Próximamente contenido sobre el acceso al sistema.</p>
        `;
        contenido.appendChild(ingresar);
    }

    // Mostrar la sección seleccionada
    const mostrar = document.getElementById(`seccion-${seccion}`);
    if (mostrar) {
        mostrar.style.display = "block";
    }

    // Reasignar eventos si estamos en inicio
    if (seccion === "inicio") {
        agregarEventosTarjetas();
    }
}

// SLIDER DE CURIOSIDADES
let indiceActual = 0;
let imagenes = [];
let puntos = [];

function mostrarAviso(indice) {
    if (!imagenes.length || !puntos.length) return;

    imagenes.forEach((img, i) => {
        img.style.opacity = i === indice ? "1" : "0";
        puntos[i].classList.toggle("activo", i === indice);
    });
    indiceActual = indice;
}

function cambiarAvisos() {
    imagenes = document.querySelectorAll(".aviso-img");
    puntos = document.querySelectorAll(".punto");

    mostrarAviso(indiceActual);

    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarAviso(indiceActual);
    }, 3000);
}

// INICIAR TODO AL CARGAR
document.addEventListener("DOMContentLoaded", () => {
    agregarEventosTarjetas();
    cambiarAvisos();
    cambiarContenido("inicio");
});



  
/*document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Credenciales predefinidas para el ejemplo
    const validUsername = "admin";
    const validPassword = "123456";
    
    if (username === validUsername && password === validPassword) {
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("menu-container").style.display = "block";
    } else {
      document.getElementById("error").style.display = "block";
    }
  });*/
  const loginForm = document.getElementById('loginForm');
  const errorMsg = document.getElementById('error');
  const menuContainer = document.getElementById('menu-container');
  const loginContainer = document.getElementById('loginContainer');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 👇 Aquí defines tu usuario y contraseña "falsos" para validar
    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "1234";

    if (username === usuarioCorrecto && password === contraseñaCorrecta) {
      // Oculta el login y muestra el menú
      loginContainer.style.display = 'none';
      menuContainer.style.display = 'block';
    } else {
      errorMsg.style.display = 'block';
    }
  });

  // Código para el botón hamburguesa del menú (asegúrate de que esté en el DOM)
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
      });
    }
  });
 

  
