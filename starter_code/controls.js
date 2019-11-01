class Controls {
  constructor(game) {
    this.game = game;
  };

  setControls() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          this.game.car.moveLeft();
          break;
        case 39:
          this.game.car.moveRight();
          break;
      }
    });
  };
};




//const car = new Car(225, 500);

//car.drawCar();

//window.addEventListener('keydown', (event) => {
//    event.preventDefault();
  //  switch (event.keyCode) {
    //    case 37:
      //      context.clearRect(0, 0, 500, 600);
        //    drawGame();
          //  car.moveLeft();
            //car.drawCar();
            //console.log(car.xposition)
           // break;
        //case 39:
          //  context.clearRect(0, 0, 500, 600);
            //drawGame();
            //car.moveRight();
            //car.drawCar();
            //break
      //  }
    //})