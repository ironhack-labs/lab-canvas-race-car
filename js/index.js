let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


let car = new Car(canvas);
// let road = new Road(canvas);
let obstacle = new Obstacles(canvas);
let scrollingBack =  new ScrollingBackground(canvas, './images/road.png');
let framesSum = 0;
let points = 0;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    initGame.start();
  }
};

const initGame = {
  start: function() {
    this.interval = setInterval(startGame, 20);
  }
}

function startGame() {
  // road.draw();
  clearCanvas();
  scrollingBack.move(); // atualiza a posição do background
  scrollingBack.draw(); // desenha o background
  car.draw();
  frames();
  updateObstacles();
  score();
  checkGameOver(); 
}

// function randomLoop() {
//   let i = 0 
//   i +=1
//   console.log(i);
//   obstacle.update();
//   clearCanvas();
//   drawCanvas();
  
//   window.requestAnimationFrame(randomLoop);
// }

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawCanvas() {
  scrollingBack.draw()
  car.draw();
}

function frames() {
  framesSum += 1; // soma quantidade de quadros
  
}

function updateObstacles() {
  for (let i = 0; i < obstaclesArray.length ; i += 1){
    obstaclesArray[i].newPos(); // atualiza a posição
    obstaclesArray[i].update(); // desenha o obstáculo

    if (obstaclesArray[i].y > 1500) { 
      obstaclesArray.shift();
    }
  }
  // a cada 160 quadros, é criado um novo obstáculo
  if (framesSum % 160 === 0) {
    minX = 0;
    maxX = 500;
    minSize = 30; 
    maxSize = 300;
    x = Math.floor(Math.random()*(maxX - minX));
    size = Math.floor(Math.random()*(maxSize - minSize));
    obstaclesArray.push(new Obstacles(x,size));
    // console.log(obstaclesArray);
  }
}

function checkGameOver() {
  for (let i = 0; i < obstaclesArray.length; i += 1) {
    if (car.crashWith(obstaclesArray[i])){
      stop();
    }
  }
}

function stop () {
  clearInterval(initGame.interval);
  // clearCanvas();
 
  setTimeout(gameOver, 1000); 
}

function score() {
  // let canvas = document.getElementById('canvas');
  // let ctx = canvas.getContext('2d');
  points += Math.floor(framesSum / 50);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '18px serif';
  ctx.fillText(`SCORE: ${points}`, 20, 50);
}


function gameOver() {
  let canvasOver = document.getElementById('canvas');
  let ctxOver = canvasOver.getContext('2d');
  ctxOver.textAlign = 'center'
  ctxOver.fillStyle = 'black';
  ctxOver.font = '38px serif';
  ctxOver.fillText('GAME OVER',250,300);
  console.log('game over');
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







