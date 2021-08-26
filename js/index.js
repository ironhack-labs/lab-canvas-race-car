window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  drawRoad();
  drawCar(250, 600);

  function startGame() {
    
    
  }
};

function drawRoad() {
const ctx = document.getElementById('canvas').getContext('2d');

ctx.clearRect(0, 0, 500, 700);

const road = new Image();
road.src = "../images/road.png"

road.onload = function() {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
 }
};

function drawCar() {
  const ctx = document.getElementById('canvas').getContext('2d');

  const car = new Image();
  car.src = "../images/car.png"

  car.onload = function() {
    ctx.drawImage(car, x, y, x + 50, y + 100);
 }
}





// const img = new Image();
// imgScale = 640/480;
// img.onload = function() {
//   ctx.drawImage(img, 215, 525,50*imgScale,150);
// };

// img.src = '/images/car.png';

// const ctx2 = document.getElementById('canvas').getContext('2d');
// const img2 = new Image();
// imgScale = 640/480;
// img2.onload = function() {
//   ctx2.drawImage(img2, 0, 0,350*imgScale,600);
// };
 
// img2.src = '/images/road.png';