const imgRoad = new Image();
const imgCar = new Image();

const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
imgRoad.src = "./images/road.png";
imgCar.src = "./images/car.png";



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {


    ctx.drawImage(imgRoad, 0, 0, $canvas.width, $canvas.height);


    //iterattion 2

    imgCar.vel = 10
    imgCar.xUbication= 1
    imgCar.yUbication= 1


    let carHeight = imgCar.height / 2
    let carWidth = imgCar.width / 2

    let startAreaWidth = $canvas.width / 2 - (carWidth / 2);

    let startAreaHeigth = $canvas.height / 2


    ctx.drawImage(imgCar, startAreaWidth, startAreaHeigth, carWidth, carHeight);


    // iterattion 3



    imgCar.move = function (dir){
      switch (dir) {
        case "LEFT":
          if (imgCar.xUbication <= 0) return
          return (imgCar.xUbication -= imgCar.vel)
        case "RIGHT":
          if (imgCar.xUbication >= $canvas.width - imgCar.width) return
          return (imgCar.xUbication += imgCar.vel)
        default:
          // throw new Error("Invalid direction")
      }
    }


    document.onkeydown = e => {
      switch (e.key) {
        case "ArrowLeft":
          imgCar.xUbication-=1
          console.log("left",imgCar.xUbication);
          return imgCar.move("LEFT")
        case "ArrowRight":
        imgCar.xUbication+=1
        console.log("rigth",imgCar.xUbication);
          return imgCar.move("RIGHT")
        default:
          break
      }
    }




    ///end sttarGame

  }



};
