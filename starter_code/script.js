let canvas = document.getElementById('gameCar');
let ctx = canvas.getContext('2d');
let car = {
  x: 100,
  moveLeft: function () {
    this.x -= 25
  },
  moveRight: function () {
    this.x += 25
  },
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    this.interval = setInterval(createBoard, 200)
  }
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log('left', car);
      break;
    case 39:
      car.moveRight();
      console.log('right', car);
      break;
  }
}

function createBoard() {

  // ctx.clearRect(0, 0, 1200, 800);
  ctx.fillStyle = "green";
  ctx.fillRect(0, 50, 500, 500);

  ctx.fillStyle = "rgb(128,128,128)";
  ctx.fillRect(50, 50, 300, 500);

  //faixas laterais
  ctx.beginPath();
  ctx.moveTo(340, 50);
  ctx.lineTo(340, 550);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.closePath();
  ctx.stroke();

  //faixas laterais
  ctx.beginPath();
  ctx.moveTo(60, 50);
  ctx.lineTo(60, 550);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.closePath();
  ctx.stroke();

  //faixa central
  ctx.beginPath();
  ctx.moveTo(200, 50);
  ctx.lineTo(200, 550);
  ctx.setLineDash([15, 5]); /*dashes are 5px and spaces are 3px*/
  ctx.lineWidth = 2;
  ctx.stroke();

  let img = new Image(); // Create new <img> element
  img.src = './images/car.png';

  img.onload = function () {
    ctx.drawImage(img, car.x, 500, 50, 50);
    img.onload;                                                                                                                             
  };
}