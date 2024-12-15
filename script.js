let currentScreen = document.querySelector('.screen.active'); // Pantalla actual

function goToScreen(screenId, direction) {
  const nextScreen = document.getElementById(screenId); // Próxima pantalla

  // Determinar la dirección de salida de la pantalla actual
  if (direction === 'right') {
    currentScreen.classList.add('exit-left'); // Sale hacia la izquierda
    nextScreen.classList.add('enter-right'); // Entra desde la derecha
  } else {
    currentScreen.classList.add('exit-right'); // Sale hacia la derecha
    nextScreen.classList.add('enter-left'); // Entra desde la izquierda
  }

  // Después de la animación (600ms), limpiar clases y activar la nueva pantalla
  setTimeout(() => {
    currentScreen.classList.remove('active', 'exit-left', 'exit-right');
    nextScreen.classList.remove('enter-left', 'enter-right');
    nextScreen.classList.add('active'); // Activa la nueva pantalla

    currentScreen = nextScreen; // Actualiza la pantalla actual
  }, 200); // Coincide con la duración de la transición CSS
}


  