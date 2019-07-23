function startGame() {


  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');

  function drawBackground() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 600, 500);

    ctx.fillStyle = 'gray';
    ctx.fillRect(50, 0, 500, 500);

    //white lines 

    let x = 0;
    for (let i = 0; i < 20; i++) {

      ctx.fillStyle = "white";
      ctx.fillRect(300, 0 + x, 10, 60);
      x += 120
    }

  }

  drawBackground()


  // draw car image
  let carObj = new Image();
  let carX = 270;
  let carY = 300;

  carObj.onload = function () {
    ctx.drawImage(carObj, carX, carY, 75, 150);
  };

  carObj.src = "starter_code/../images/car.png"


  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37: // left arrow
        carX -= 10;
        ctx.clearRect(0, 0, 600, 500)
        drawBackground()
        ctx.drawImage(carObj, carX, carY, 75, 150);
        break;
      case 39: // right arrow
        carX += 10;
        ctx.clearRect(0, 0, 600, 500)
        drawBackground()
        ctx.drawImage(carObj, carX, carY, 75, 150);
        break;

    }
  }

}




window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();





  };

};
