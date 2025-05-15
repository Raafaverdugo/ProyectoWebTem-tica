const personajes = [
  {
    nombre: "Bloom",
    imagen: "../resources/bloom.png",
    texto: "Transformación: Enchantix"
  },
  {
    nombre: "Stella",
    imagen: "../resources/stella.png",
    texto: "Transformación: Harmonix"
  },
  {
    nombre: "Flora",
    imagen: "../resources/flora.png",
    texto: "Transformación: Believix"
  },
  {
    nombre: "Musa",
    imagen: "../resources/musa.png",
    texto: "Transformación: Sirenix"
  },
  {
    nombre: "Tecna",
    imagen: "../resources/tecna.png",
    texto: "Transformación: Mythix"
  },
  {
    nombre: "Aisha",
    imagen: "../resources/aisha.png",
    texto: "Transformación: Butterflix"
  }
];

const contenedor = document.getElementById("tarjetasWinx");

personajes.forEach((p, i) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4";

  const tarjeta = document.createElement("div");
  tarjeta.className = "card-flip";
  tarjeta.id = `card-${i}`;

  tarjeta.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front" data-id="${i}">
        <img src="${p.imagen}" alt="${p.nombre}" />
      </div>
      <div class="flip-back" data-id="${i}">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">${p.texto}</p>
      </div>
    </div>
  `;

  col.appendChild(tarjeta);
  contenedor.appendChild(col);
});

document.addEventListener("click", function (e) {
  const id = e.target.closest("[data-id]")?.getAttribute("data-id");
  if (id !== null) {
    const card = document.getElementById(`card-${id}`);
    card.classList.toggle("flipped");
  }
});
