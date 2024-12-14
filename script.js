// Función para cambiar de pantalla
function goToScreen(screenId) {
    // Seleccionamos todas las pantallas
    const screens = document.querySelectorAll('.screen');
  
    // Eliminamos la clase 'active' de todas las pantallas
    screens.forEach(screen => screen.classList.remove('active'));
  
    // Añadimos la clase 'active' a la pantalla seleccionada
    const selectedScreen = document.getElementById(screenId);
    selectedScreen.classList.add('active');
  }
  