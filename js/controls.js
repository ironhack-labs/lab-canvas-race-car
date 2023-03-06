function keyPressed(){
  controlCar();
  
}

function controlCar(){
  if (keyCode === UP_ARROW) {
    myCar.moveUp();
  }

  if (keyCode === DOWN_ARROW) {
    myCar.moveDown();
  }

  if (keyCode === RIGHT_ARROW) {
    myCar.moveRight();
  }

  if (keyCode === LEFT_ARROW) {
    myCar.moveLeft();
  }
}



