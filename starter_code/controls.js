
class Controls {
    constructor(game){
    this.context = game.context;
    this.width = game.width;
    this.height = game.height;
    this.position = game.position;
  }

  moveLeft(){
    if (this.position > 40){
      this.position --;
    } else {
      this.position = 40;
    }
  }

  moveRight(){
    if(this.position > 40){
    this.position++;
  } else {
    this.position = 40;
  }
}
}




// making the car move with the right the left keyboard keys

window.addEventListener('keydown', (e) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (e.keyCode) {
      case 37:
          //context.clearRect(car.position, 0, 0, 0);
          game.player.moveLeft();
          drawEverything();
          console.log('left');
          break;
      case 39:
          //context.clearRect(car.position, 0, 0, 0);
          game.player.moveRight();
          drawEverything();
          console.log('right');
          break;
  }
});