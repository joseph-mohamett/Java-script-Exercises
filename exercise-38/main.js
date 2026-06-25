const menuToggleButton = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggleButton.addEventListener("click", function(e){
    e.preventDefault();
    navbar.classList.toggle("online");
});