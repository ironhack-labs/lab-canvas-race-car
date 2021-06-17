const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let backgroundPosY = 0;
let background = new Image();
background.src = '/images/road.png';
background.onload = function() {
  ctx.drawImage(background, 0, backgroundPosY, 500, 700);
  }

let car = new Image();
let carPosX = 210;
car.src = '/images/car.png';
car.onload = ()=>{
  ctx.drawImage(car, carPosX, 520, 80, (80 / car.width) * car.height);
}

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.drawImage(background, 0, backgroundPosY, 500, 700);
  ctx.drawImage(car, carPosX, 520, 80, (80 / car.width) * car.height);
  backgroundPosY ++
}


document.onkeydown = function (event) {
  console.log("event.keyCode", event.keyCode)
  // left
  if (event.keyCode === 37) {
    carPosX -= 10
  }
  // right
  if (event.keyCode === 39) {
    carPosX += 10
  }
  updateCanvas();
}

setInterval(updateCanvas, 1000 / 60)









