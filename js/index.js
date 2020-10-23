const imgRoad = new Image();
const imgCar = new Image();

const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
imgRoad.src = "./images/road.png";
imgCar.src = "./images/car.png";

let gameInterval
let ratio = 0
let obstacles=[]



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  let y = $canvas.height / 2
  function startGame() {

    // if (gameInterval) return
    gameInterval = setInterval(updateGame, 1000 / 60)
    ctx.drawImage(imgRoad, 0, 0, $canvas.width, $canvas.height);


    //iterattion 2

    imgCar.vel = 0
    imgCar.xUbication = 0
    imgCar.yUbication = 0


    let carHeight = imgCar.height / 2
    let carWidth = imgCar.width / 2

    let startAreaWidth = $canvas.width / 2 - (carWidth / 2);

    let startAreaHeigth = $canvas.height / 2


    ctx.drawImage(imgCar, startAreaWidth, startAreaHeigth, carWidth, carHeight);


    // iterattion 3

    imgCar.moveLeft = function() {
      imgCar.xUbication -= 15
    };
    imgCar.moveRight = function() {
      this.x += 15
    }
    imgRoad.draw = function(){
      if(this.y < -$canvas.height) this.y = 0
      imgRoad.y++
      ctx.drawImage(imgRoad, imgRoad.x, imgRoad.y, imgRoad.width, imgRoad.height)
      ctx.drawImage(imgRoad, imgRoad.x, imgRoad.y - $canvas.height, imgRoad.width, imgRoad.height)
    }
    imgCar.draw = function(){
      ctx.drawImage(imgCar, this.x, this.y, this.width, this.height)
    }




    function updateGame() {
      //recalcular el estado de los elementos
      // x++
      //limpiar el canvas
      // clearCanvas()
      //dibujar los elementos
      // ctx.fillRect(x, 0, 10, 10)
      // board.draw()
      y++
      // generateObstacles()
      // clearCanvas()
      imgCar.draw()
      imgRoad.draw()
      // drawObstacles()

    }

    document.onkeydown = e => {
      switch (e.key) {
        case "ArrowLeft":
          imgCar.moveLeft()
          console.log("LEFT now you're at x:", imgCar.xUbication);
          break
        case "ArrowRight":
          imgCar.moveLeft()
          console.log("RIGTH now you're at x:", imgCar.xUbication);
          break
        default:
          break
      }
    }




    ///end sttarGame

  }



};
