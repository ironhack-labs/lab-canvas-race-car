const track = document.getElementById('track')
const ctx = track.getContext('2d');

function auto(){
  const title = new Image();
  title.src = "images/viper.jpg";
  title.onload = () => {
    ctx.drawImage(title,0,0, 500, 600);
  }
}

auto()

function drawRoad(){
  // draw barrier
  ctx.fillStyle = '#fff';
  ctx.fillRect(35, 0, 10, 600)
  ctx.fillRect(455, 0, 10, 600)
  
  // draw grass
  ctx.fillStyle = '#398207';
  ctx.fillRect(0, 0, 25, 600);
  ctx.fillRect(475, 0, 25, 600);
  
  // stripes
//   ctx.strokeStyle = '#fff';
//   ctx.lineWidth = 4;
//   ctx.beginPath();
//   ctx.setLineDash([30, 30]);
//   ctx.moveTo(250, 0);
//   ctx.lineTo(250, 600);
//   ctx.stroke()
//   ctx.closePath();
  
 }

let y = 0;

function moveBarrier(){
  y -= 3;
  if(y === 600){
    
  }
}

function drawDash(){
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.setLineDash([30, 30]);
  ctx.moveTo(250, 0+y);
  ctx.lineTo(250, 600+y);
  y += 3;
  ctx.moveTo(250, -600+y);
  ctx.lineTo(250, 0+y);
  if(y === 600){
    y = 0
  }
  ctx.stroke()
  ctx.closePath();
  
}

// car
const car = new Image()
car.src = "images/car.png";
function drawCar(){
  ctx.drawImage(car, x, 350, 100, 200);
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}

let x = 300;

function startGame() {
  clearAll();
  animate();
}

const clearAll = () => ctx.clearRect(0,0, track.width, track.height)

const posX = Math.floor(Math.random())*25;
const barrierW = Math.floor(Math.random()*300);

function drawBarrier(){
  ctx.fillStyle = 'red';
  ctx.fillRect(posX, y, barrierW , 20);
}

function animate(){
  document.onkeydown = moveCar;
  clearAll();
  drawDash()
  drawBarrier();
  drawRoad();
  drawCar();
  moveCar(window);
  window.requestAnimationFrame(animate)
}

function moveCar(e){
  if(e.keyCode === 37 && x > 50){
    x -= 20;
  }
  if(e.keyCode === 39 && x < 350){
    x += 20;
  }
}



