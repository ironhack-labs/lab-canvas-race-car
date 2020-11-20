function startGame() {
    updateBackgroundCanvas();
    // ctxBack.drawImage(roadImg, 0, 0, 500, 700) ;
    // car.draw();
  };
  
  
      document.addEventListener('keydown', e => {
        switch (e.keyCode) {
          case 37: car.moveLeft();  break;
          case 39: car.moveRight(); break;
        }
        updateBackgroundCanvas();
      })
      