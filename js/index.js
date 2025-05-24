  "use strict";
  
  const audio = document.getElementById('Cancion');
  const button = document.getElementById('btnCancion');

  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      button.textContent = 'Parar Canción';
    } else {
      audio.pause();
      audio.currentTime = 0; // Reinicia la canción
      button.textContent = 'Reproducir Canción';
    }
  });
