document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowLeft':
        player1.moveLeft();
        break;
      case 'ArrowRight':
        player2.moveRight();
        break;
    }
    updateCanvas();
})