window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
  function startGame() {
    const canvas = document.getElementById('canvas');
    const context = this.canvas.getContext('2d');
    const game = new Game(canvas, context);
    game.init();


    document.addEventListener('keydown', event => {
      switch(event.code) {
        case 'ArrowLeft':
        case 'KeyA':
          if(game.car.x > 55) game.car.x -= 20; 
          break;
        case 'ArrowRight':
        case 'KeyD':
          if(game.car.x <= game.canvas.width - game.car.width - 55) game.car.x += 20;
          break;
      };
      console.log(game.car.x);
    });
  }
};
