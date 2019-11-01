
class Controls {
  constructor(game){
    this.game = game
  }
  setControls(){
    window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        game.car.moveLeft();
        game.drawEverything()
        break;
      case 39:
        game.car.moveRight();
        game.drawEverything()
        break;
    }
  });
}
}