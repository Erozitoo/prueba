const menuIcon = document.getElementById("menuhamburgesa");
const menuList = document.getElementById("list");

menuIcon.addEventListener("click", () => {
  // Gira el ícono
  menuIcon.classList.toggle("girar");

  // Muestra / oculta el menú
  menuList.classList.toggle("active");

 
  
});