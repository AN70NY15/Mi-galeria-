// Función que se ejecuta cuando la página termina de cargar
window.onload = function() {
    console.log("La página ha cargado correctamente.");
  
    // Seleccionar todas las imágenes
    const images = document.querySelectorAll('.gallery img');
  
    // Añadir tabindex y eventos a cada imagen
    images.forEach((image, index) => {
      image.setAttribute('tabindex', index + 1); // Añadir tabindex
      image.onfocus = () => {
        image.style.outline = "3px solid #00f"; // Resalta cuando tiene el foco
      };
      image.onblur = () => {
        image.style.outline = "none"; // Quita el resaltado cuando pierde el foco
      };
    });
  };
  