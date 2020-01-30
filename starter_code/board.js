//car image
let carImg = new Image();
carImg.src = './images/car.png';

function drawBoard() {
  //white stripe
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.fillRect(35, 0, 5, 500);
  ctx.fillRect(360, 0, 5, 500);
  ctx.closePath();

  //first border and last border
  ctx.beginPath();
  ctx.fillStyle = '#42f59b';
  ctx.fillRect(0, 0, 30, 500);
  ctx.fillRect(370, 0, 30, 500);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = 'gray';
  ctx.fillRect(30, 0, 5, 500);
  ctx.fillRect(365, 0, 5, 500);
  ctx.closePath();
  //central rectangle
  ctx.beginPath();
  ctx.fillStyle = 'gray';
  ctx.fillRect(40, 0, 320, 500);
  ctx.closePath();
  //central dash line
  ctx.beginPath();
  ctx.setLineDash([15, 5]);
  ctx.strokeStyle = 'white';
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 500);
  ctx.stroke();
  ctx.closePath();

  //car image
  ctx.drawImage(carImg, car1.carX, car1.carY, 100, 150);
  //draw obstacles
  for (let obstacles of loadObst) {
    obstacles.paint();
  }
}
//clear canvas
const cleanCanvas = () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
