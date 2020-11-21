let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let car = new Car(canvas);
let road = new Road(canvas);
let obstacle = new Obstacles(canvas);


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};

function startGame() {
  road.draw();
  car.draw();
  randomLoop();
}

function randomLoop() {
  let i = 0 
  i +=1
  console.log(i);
  obstacle.update();
  clearCanvas();
  drawCanvas();
  
  window.requestAnimationFrame(randomLoop);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawCanvas() {
  road.draw()
  car.draw();
  obstacle.draw();
}


document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
  }
});







