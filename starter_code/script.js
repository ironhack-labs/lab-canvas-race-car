window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  const canvas = document.getElementById("road");
  const road = canvas.getContext("2d");
  
  road.translate(150, 600);
  
  function render () {
  //estrada
  road.fillStyle = "green";
  road.fillRect(-150, 0, 300, -600 )
  road.fillStyle = "grey";
  road.fillRect(-130, 0, 260, -600 )
  road.strokeStyle = "white";
  road.lineWidth = 4; 
  road.strokeRect(-120, 20, 240, -640)

  for (let i =0; i < 900; i += 15) {
    if (i % 2 === 0 ) {
    road.moveTo(0, -i)
    road.lineTo(0, - i - 10)
    }
  }
  road.stroke();
};

const car = new Car("images/car.png", road);

car.draw()

const obstacle = 



  function startGame() {
    //colocar windown.update aqui
  }
  window.addEventListener('keydown', (e) => {
    // Left arrow key.
    if (e.keyCode === 37) {
      car.turnLeft();
    }
    // Right arrow key.
    if (e.keyCode === 39) {
      car.turnRight();
    }    
});
setInterval (function(){render(); car.draw()}, 5);
}


window.onload = () => {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };

  function startGame() {
    const ins = document.querySelector('#game-board');
    const element = document.createElement('canvas');
    element.setAttribute('id', 'road');
    element.setAttribute('width', '300');
    element.setAttribute('height', '600');
    ins.appendChild(element);

    canvas = document.getElementById('road');
    road = canvas.getContext('2d');
    road.translate(150, 600);
    car = new Car('images/car.png', road);
    drawRoad();
    car.draw();
    looper = setInterval(render, 50);
    }
};


let canvas;
let car;
let road;
const OBSTACLES = [];
let looper;
let frames = 0;
let score = 0;

const drawRoad = () => {
  road.fillStyle = 'green';
  road.fillRect(-150, 0, 300, -600);
  road.fillStyle = 'grey';
  road.fillRect(-130, 0, 260, -600);
  road.strokeStyle = 'white';
  road.lineWidth = 4;
  road.strokeRect(-120, 20, 240, -640);
  for (let i = 0; i < 900; i += 15) {
    if (i % 2 === 0) {
      road.moveTo(0, -i);
      road.lineTo(0, -i - 10);
    }
  }
  road.stroke();
}

const createObstacle = (road) => {
  if(frames % 55 === 0){
    OBSTACLES.unshift(new Obstacle(road))
  } else if(frames > 2000){
    frames = 0;
  }
}

const removeObstacle = () => {
  OBSTACLES.forEach(obstacle => {
    if(obstacle.y >= 0){
      score += obstacle.width;
      OBSTACLES.pop();
    }
  })
}

const drawObstacles = (road) => {
  OBSTACLES.forEach(obstacle => obstacle.draw(road))
}

const resetCanvas = (road) => {
  road.clearRect(-150, 0, 300, -600);
}

const render = () => {
  resetCanvas(road);
  drawRoad();
  frames += 1;
  createObstacle(road);
  drawObstacles(road);
  car.draw();
  removeObstacle();
  showScore(road);
  collisionDetection();
}

const collisionDetection = () => {
  OBSTACLES.forEach(obstacle => {
    if(obstacle.x < car.x + 10 &&
      obstacle.x + obstacle.width > car.x &&
      obstacle.y < car.y + 30 &&
      obstacle.y + 30 > car.y){
      
      clearInterval(looper);
      resetCanvas(road)
      road.fillText("GAME OVER", 0, -300)
      setTimeout(() => {
      let ins = document.getElementById('game-board');
      ins.removeChild(ins.firstChild)}, 3000);
    }
  })
}

const showScore = (road) => {
  road.fillText('Score: ', -100, -500);
  road.fillText(score.toFixed(2), -50, -500);
}

// looper = setInterval(render, 10)

window.addEventListener('keydown', (e) => {
  // Left arrow key.
  if (e.keyCode === 37) {
    car.turnLeft();
  }
  // Right arrow key.
  if (e.keyCode === 39) {
    car.turnRight();
  }
});