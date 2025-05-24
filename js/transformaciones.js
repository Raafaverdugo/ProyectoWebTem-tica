"use strict"; 

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  function createFallingObject() {
    const obj = document.createElement("div");
    obj.classList.add("falling-object");
    
    // Usa el ícono que quieras: pétalo, estrella, etc.
    obj.textContent = "🧚"; // Puedes cambiar a: "✨", "💖", "⭐", "🧚", etc.
    
    obj.style.left = Math.random() * 100 + "vw";
    obj.style.animationDuration = 4 + Math.random() * 3 + "s";
    obj.style.fontSize = 20 + Math.random() * 20 + "px";
    
    document.body.appendChild(obj);
    
    // Eliminar después de caer
    setTimeout(() => {
      obj.remove();
    }, 5000);
  }

  // Crear objetos cayendo cada cierto tiempo
  setInterval(createFallingObject, 300);
});
