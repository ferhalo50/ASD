const boton = document.getElementById("mostrarContacto");

const contacto = document.getElementById("contacto");

boton.addEventListener("click", function(){

    if(contacto.style.display === "block"){

        contacto.style.display = "none";

    }else{

        contacto.style.display = "block";

    }

});

// MENU RESPONSIVE

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});