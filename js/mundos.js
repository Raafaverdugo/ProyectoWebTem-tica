document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".mundo-titulo");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const descripcion = boton.nextElementSibling;
      descripcion.classList.toggle("open");
    });
  });
});
