const personajes = [
  {
    nombre: "Bloom",
    imagen: "../resources/bloom.png",
    transformacion: "../resources/bloom_transform.png",
    texto: "Transformación: Enchantix"
  },
  {
    nombre: "Stella",
    imagen: "../resources/stella.png",
    transformacion: "../resources/stella_transform.png",
    texto: "Transformación: Harmonix"
  },
  {
    nombre: "Flora",
    imagen: "../resources/flora.png",
    transformacion: "../resources/flora_transform.png",
    texto: "Transformación: Believix"
  },
  {
    nombre: "Musa",
    imagen: "../resources/musa.png",
    transformacion: "../resources/musa_transform.png",
    texto: "Transformación: Sirenix"
  },
  {
    nombre: "Tecna",
    imagen: "../resources/tecna.png",
    transformacion: "../resources/tecna_transform.png",
    texto: "Transformación: Mythix"
  },
  {
    nombre: "Aisha",
    imagen: "../resources/aisha.png",
    transformacion: "../resources/aisha_transform.png",
    texto: "Transformación: Butterflix"
  }
];

const contenedor = document.getElementById("tarjetasWinx");

personajes.forEach((p, i) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4";

  const tarjeta = document.createElement("div");
  tarjeta.className = "card-flip h-100";
  tarjeta.id = `card-${i}`;

  tarjeta.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h5 class="card-title">${p.nombre}</h5>
        <button class="flip-button" data-id="${i}">↻</button>
      </div>
      <div class="flip-back">
        <img src="${p.transformacion}" alt="${p.nombre} transformación">
        <h5 class="card-title">${p.texto}</h5>
        <button class="flip-button" data-id="${i}">↻</button>
      </div>
    </div>
  `;

  col.appendChild(tarjeta);
  contenedor.appendChild(col);
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("flip-button")) {
    const id = e.target.getAttribute("data-id");
    const card = document.getElementById(`card-${id}`);
    card.classList.toggle("flipped");
  }
});
