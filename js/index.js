//when we click on the Start Game button, we need to create the canvas and display the road.
//SINTAXIS
// void ctx.drawImage(image, dx, dy, dWidth, dHeight);
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const $canvas = document.querySelector("canvas");
    const ctx = $canvas.getContext("2d");

    imgRoad = new Image();
    imgRoad.src = "./images/road.png";
    ctx.drawImage(imgRoad, 0, 0, $canvas.width, $canvas.height);


    //iterattion 2

    imgCar = new Image();
    imgCar.vel = 10
    imgCar.src = "./images/car.png";

    let carHeight = imgCar.height / 2
    let carWidth = imgCar.width / 2

    let startAreaWidth = $canvas.width / 2 - (carWidth / 2);

    let startAreaHeigth = $canvas.height / 2


    ctx.drawImage(imgCar, startAreaWidth, startAreaHeigth, carWidth, carHeight);


    //iterattion 3
    // document.onkeydown = e => {
    //   switch (e.key) {
    //     case "ArrowLeft":
    //       return imgCar.move("LEFT")
    //     case "ArrowRight":
    //       return imgCar.move("RIGHT")
    //     default:
    //       break
    //   }
    // }
    // debugger
    //
    //
    // move(dir) {
    //   switch (dir) {
    //     case "UP":
    //       if (imgCar.y <= 0) return
    //       return (imgCar.y -= imgCar.vel)
    //     case "DOWN":
    //       if (imgCar.y >= $canvas.height - imgCar.height) return
    //       return (imgCar.y += imgCar.vel)
    //     case "LEFT":
    //       if (imgCar.x <= 0) return
    //       return (imgCar.x -= imgCar.vel)
    //     case "RIGHT":
    //       if (imgCar.x >= $canvas.width - imgCar.width) return
    //       return (imgCar.x += imgCar.vel)
    //     default:
    //       throw new Error("Invalid direction")
    //   }
    //
    // }




    ///end sttarGame

  }



};
