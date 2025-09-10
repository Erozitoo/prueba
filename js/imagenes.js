  const camisetas = [
    { id: 1, nombre: "Camiseta Blanca", precio: 2000, imagen: "camisetas de muestra/camiseta1.jpg"},
    { id: 2, nombre: "Camiseta Negra", precio: 25000, imagen: "camisetas de muestra/camiseta2.jpg"},
    { id: 3, nombre: "Camiseta Roja", precio: 22000, imagen: "camisetas de muestra/camiseta3.jpg"},
  ];
 
  function mezclar(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function cargarCamisetas() {
    let contenedor = document.getElementById("galeria");
    contenedor.innerHTML = ""; 

    let camisetasMezcladas = mezclar([...camisetas]);

    camisetasMezcladas.forEach(camiseta => {
      let carta = document.createElement("div");
      carta.classList.add("carta");

      carta.innerHTML = `
        <img src="img/${camiseta.imagen}" alt="${camiseta.nombre}" class="imagen">
        <div class="overlay">
           <p class="info">${camiseta.nombre}<br>$${camiseta.precio}</p>
        </div>
      `;

      contenedor.appendChild(carta);
    });
  }

  document.addEventListener("DOMContentLoaded", cargarCamisetas);

  const descuentosBtn = document.getElementById("descuentosBtn");
    const submenu = document.getElementById("submenu");

    descuentosBtn.addEventListener("click", (e) => {
      e.preventDefault(); // evita que recargue la página
      submenu.classList.toggle("show"); // muestra/oculta
    });


  