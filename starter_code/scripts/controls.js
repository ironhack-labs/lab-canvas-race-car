class Controls {
  constructor(game) {
    this.game = game;
  }

  setControls() {
    window.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
            event.preventDefault();
            this.game.car.velocity = -5;
          break;
        case 39:
          event.preventDefault();
            this.game.car.velocity = 5;
          break;
        case 13:
            this.game.restartGame();
          break;
      }
    });
    window.addEventListener("keyup", event => {
        switch (event.keyCode) {
          case 37:
            //console.log('left');
            event.preventDefault();
            //game.drawBackground();
            this.game.car.velocity = 0;
            //this.game.car.drawCar();
            break;
          case 39:
            //console.log('right');
            event.preventDefault();
            //game.drawBackground();
            this.game.car.velocity = 0;
            //game.car.drawCar();
            break;
        }
      });
  }
}
