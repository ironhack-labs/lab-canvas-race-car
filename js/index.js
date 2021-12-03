window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  const width = canvas.width;
  const height = canvas.height;

  function drawBoard () {
    const boardImg = new Image();
    boardImg.src = '/images/road.png';
    boardImg.onload = () => {
      ctx.drawImage(boardImg, 0, 0, width, height);
    }
  }

  function drawCar () {
    const carImage = new Image();
    carImage.src = '/images/car.png';
    carImage.onload = () => {
      ctx.drawImage(carImage, 225, 525, 50, 100);
    }
  }

  class Car {
    constructor(col, row){
      this.col = col;
      this.row = row;
    }
    moveLeft(){
        this.col -= 25;
        drawCar();
    }
    moveRight(){
        this.col += 25;
        drawCar();
    }   
  }

  const player = new Car(225, 525);

//   document.addEventListener("keydown", (e) => {
//     switch (e.keyCode) {
//       case 37:
//         player.moveLeft();
//         break;
//       case 39:
//         player.moveRight();
//         break;
//     } 
// });


  function startGame() {
    document.getElementById('start-button').onclick = function(){
      drawBoard ();
      drawCar ();
  }
  }
};

startGame();
