const boton = document.getElementById("mostrarContacto");

const contacto = document.getElementById("contacto");

boton.addEventListener("click", function(){

    if(contacto.style.display === "block"){

        contacto.style.display = "none";

    }else{

        contacto.style.display = "block";

    }

});


// CALCULADORA

const calcularBtn = document.getElementById("calcularBtn");

const calculadora = document.getElementById("calculadora");

calcularBtn.addEventListener("click", function(){

    if(calculadora.style.display === "block"){

        calculadora.style.display = "none";

    }else{

        calculadora.style.display = "block";

    }

});


const botonCalcular = document.getElementById("calcularAhorro");

const resultado = document.getElementById("resultado");

botonCalcular.addEventListener("click", function(){

    const recibo = document.getElementById("recibo").value;

    const ahorro = recibo * 12 * 0.70;

    resultado.innerHTML =
    "Podrías ahorrar hasta un 70% en tu recibo de luz, " +
    "equivalente a aproximadamente $" +
    ahorro.toFixed(2) +
    " pesos al año ☀️";

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