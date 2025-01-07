document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    if (navbar.style.left === "0px") {
      navbar.style.left = "-100%"; // Ocultar el menú
    } else {
      navbar.style.left = "0px"; // Mostrar el menú
    }
  });
});
