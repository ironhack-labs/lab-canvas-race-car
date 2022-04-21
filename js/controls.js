document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowLeft':
        car.moveLeft();

        break;
      case 'ArrowRight':
        car.moveRight();
        break;
    }
  });

  document.addEventListener('keyup', (e) => {
    car.speedX = 0;
    car.speedY = 0;
  });