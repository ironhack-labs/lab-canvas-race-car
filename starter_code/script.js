window.onload = function () {
  let myCanvas = document.getElementById("game")
  let ctx = myCanvas.getContext('2d')
  let carPositionOnTheXAxis = 230
  document.getElementById("start-button").onclick = function () {
    moveCar(0);
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37: // left arrow
          moveCar(-5);
          break;
        case 39: // right arrow
          moveCar(5);
          break;
      }
    };
  };
  function moveCar(xAxisChange) {
    let newPosition = carPositionOnTheXAxis + xAxisChange
    if (newPosition < 450 && newPosition > 20) {
      drawBackground()
      let car = new Image(50, 50)
      car.src = './images/car.png';
      car.onload = function () {
        ctx.drawImage(car, (carPositionOnTheXAxis += xAxisChange), 420, 30, 60)
      }
    }
  }
  function drawBackground() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'grey'
    ctx.fillRect(0, 0, 500, 500)
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 100, 500)
    ctx.fillRect(400, 0, 100, 500)
  }
};