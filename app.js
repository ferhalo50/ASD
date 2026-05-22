const boton = document.getElementById("mostrarContacto");

const contacto = document.getElementById("contacto");

boton.addEventListener("click", function(){

    if(contacto.style.display === "block"){

        contacto.style.display = "none";

    }else{

        contacto.style.display = "block";

    }

});

function abrirImagen(src){

    const visor = document.getElementById("visor");

    const imagen = document.getElementById("imagenExpandida");

    visor.style.display = "flex";

    imagen.src = src;
}


function cerrarImagen(){

    document.getElementById("visor").style.display = "none";
}


// MENU RESPONSIVE

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});