document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbar = document.querySelector(".navbar");
  
    // Alternar la clase "active" en la barra de navegación al hacer clic
    navbarToggle.addEventListener("click", function () {
      if (navbar.style.left === "10px") {
        navbar.style.left = "-250px"; // Oculta la barra
      } else {
        navbar.style.left = "10px"; // Muestra la barra
      }
    });
  });
  