"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card"); // Selecciono todas las tarjetas

  // Cuando clickeo una tarjeta, la volteo (añado/quito clase)
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Función para crear un objeto que cae (flores, estrellas, etc)
  function createFallingObject() {
    const obj = document.createElement("div");
    obj.classList.add("falling-object");
    obj.textContent = "🌸";

    // Posición horizontal aleatoria
    obj.style.left = Math.random() * 100 + "vw";
    // Duración aleatoria de la animación (caída)
    obj.style.animationDuration = 4 + Math.random() * 3 + "s";
    // Tamaño aleatorio
    obj.style.fontSize = 20 + Math.random() * 20 + "px";

    document.body.appendChild(obj); // Lo añado al body

    // Lo borro después de 5 segundos para no llenar la página
    setTimeout(() => {
      obj.remove();
    }, 5000);
  }

  setInterval(createFallingObject, 300);
});
