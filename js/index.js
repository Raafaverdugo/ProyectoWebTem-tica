"use strict"; 

// Obtener elementos del DOM
const audio = document.getElementById('Cancion');
const button = document.getElementById('btnCancion');

// Evento para reproducir o pausar la canción al hacer click
button.addEventListener('click', () => {
  if (audio.paused) {
    audio.play(); // Reproduce audio
    button.textContent = 'Parar Canción'; // Cambia texto botón
  } else {
    audio.pause(); // Pausa audio
    audio.currentTime = 0; // Reinicia la canción al inicio
    button.textContent = 'Reproducir Canción'; // Cambia texto botón
  }
});
