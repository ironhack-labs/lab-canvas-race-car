const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');
let intervalId;
let frames = 0;
let obstacles = [];
let score = 0;
let obstaclesLength = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};


class Board{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.width = $canvas.width;
		this.height = $canvas.height;
		this.img = new Image();
		this.img.src = '../images/road.png';;
	}
	draw(){
		// Si su posición en x se mueve y es menor que el ancho del canvas (se sale)
		if (this.y >$canvas.height) this.y = 0; // reinicie
		this.y++; // Mueve la imágen de der-izq, ver imagen
		// imagen inicial
		ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
		// copia de la imagen al lado
		ctx.drawImage(this.img, this.x,this.y - $canvas.height,this.width,this.height);
	}
}

class Car{
  constructor(){
    this.height = 100;
    this.width = 50;
    this.x = $canvas.width/2 - this.width/2;
    this.y = $canvas.height - this.height - 50;
    this.img = new Image();
    this.img.src = '../images/car.png';;
    this.vel = 10;
  }

  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move(dir){
    switch (dir) {
      case 'ArrowLeft':
        if (this.x < 0) return
        this.x -=this.vel;
        break;
    case 'ArrowRight':
      if (this.x > $canvas.width - this.width) return
        this.x +=this.vel;
        break;
      default:
        break;
    }
  }

  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}


class Obstacle {
	constructor(x, width){
		this.height = 20;
		this.x = x;
		this.y = 0;
		this.width = width;
	}

	draw(){
		this.y++; // Moverlo de top-bot
		ctx.fillStyle = 'crimson';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

function generateObstacles(){
	if (frames % 200 === 0 ){ // Solo se ejecute cada 200 frames
		const min = 100; // alto mínimo
		const max = $canvas.width - 100; // alto máximo
		const randomWidth = Math.floor( Math.random() * (max-min));
		const gap = 100;
		obstacles.push(new Obstacle(0,randomWidth));
		obstacles.push(new Obstacle(randomWidth + gap,$canvas.width - randomWidth - gap));
  }
}

function drawObstacles(){
	obstacles.forEach(obs => obs.draw());
}

function clearObstacles(){
  obstaclesLength = obstacles.length;
  obstacles = obstacles.filter(obs => obs.y <= $canvas.height);
  countScore(obstacles);
}

function countScore(obstacles){
  if (obstacles.length < obstaclesLength) {
    score++
    obstaclesLength = obstacles.length
  };
}

const board = new Board();
const p1 = new Car();

  function startGame() {
    if (intervalId) return 
    intervalId = setInterval(update, 1000/60);
  }

  function update(){
    if (intervalId) {
      frames++;
      // Actualizar
      clearObstacles();
      generateObstacles();
      // Limpiar
      clearCanvas();
      // Pintar
      board.draw();
      drawObstacles();
      p1.draw();
      printScore();
      checkIfTouching();
    }
  }

  function printScore(){
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${score}`,70,50)
  }

  function checkIfTouching(){
    if (obstacles.some( obs => p1.isTouching(obs))) {
      clearInterval(intervalId);
      intervalId = null;
      clearCanvas();
      gameOver();
      clearAll();
    }
  }

  function clearCanvas(){
    ctx.clearRect(0,0,$canvas.width,$canvas.height);
  }

  function gameOver(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, $canvas.width, $canvas.height);
    ctx.font = '40px Arial';
    ctx.fillStyle = 'crimson';
    ctx.fillText(`Game Over`,$canvas.width/2-100,$canvas.width/3);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Your final score: ${score}`,$canvas.width/2-100,$canvas.width/2);
  }

function clearAll(){
  intervalId;
  frames = 0;
  obstacles = [];
  score = 0;
  obstaclesLength = 0;
  p1.x = $canvas.width/2 - p1.width/2;
  p1.y = $canvas.height - p1.height - 50;
}


  // Controles
  document.onkeydown = e => {
    switch (e.key) {
      case "ArrowLeft":
        return p1.move(e.key);
    case "ArrowRight":
        return p1.move(e.key);
      default:
        break;
    }

  }