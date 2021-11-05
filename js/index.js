const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let frames = 0;
const obstacles = [];
let scorePoints = 0;


class Board {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = $canvas.width;
		this.height = $canvas.height;
		this.image = new Image();
		this.image.src = "../images/road.png";
    
	}

	draw() {
		this.y+=5;
		if (this.y > $canvas.height) this.y = 0;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.drawImage(
			this.image,
			this.x,
			this.y - this.height,
			this.width,
			this.height
		);
	}
}


class Character {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 50;
		this.image = new Image();
    this.image.src = "../images/car.png";
    this.move = 15;
	}

  draw() {
		if (this.x > $canvas.width - this.width - 60)
			this.x = $canvas.width - this.width - 60;
    if (this.x < 65)
    this.x = 65;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		this.x -= this.move;
	}
	moveRight() {
		this.x += this.move;
	}

  isTouching(obj) {
		return (
			this.x < obj.x + obj.width &&
			this.x + this.width > obj.x &&
			this.y < obj.y + obj.height &&
			this.y + this.height > obj.y
		);
	}
	}

  class Obstacle extends Character {
    constructor(x, y) {
      super(x, y);
      this.image.src = "../images/obstacle.png"
      this.width = 150;
      this.height = 25;
    }

    draw() {
      this.y+=5;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

  }

  class Score {
    draw() {
      this.y = 40;
      this.x = 80;
      ctx.fillText(`Score: ${scorePoints}`, this.x, this.y, 100, 40);
      ctx.fillStyle = "white";
      ctx.font = "30px sans-serif";
    }
  }

  class Endgame extends Board{
    constructor(x,y) {
     super(x,y);
     this.image.src = "../images/topgear.png";
  }

  draw() {
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  ctx.fillStyle = "red";
  ctx.fillText("Game over!", 500, 500, 100);
  ctx.font = "100px sans-serif";
  alert("¡Perdiste!")
}
  }

  let endgame = new Endgame;
  let score = new Score;
  const board = new Board;
  const car = new Character(233, 500);



function update() {
	// 1. calcular o recalcular el estado de nuestro programa
	frames++;
	checkKeys();

	// 2. Limpiar el canvas
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
	// 3. Dibujar los elementos
	board.draw();
	car.draw();
  updateScore();
  score.draw();
  drawObstacle();
  generateObstacle();
  checkCollitions();
  requestAnimationFrame(update);
}

function updateScore() {
  scorePoints = Math.floor(frames / 100);
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    update();
  }
}

function generateObstacle() {
	if (frames % 120 === 0) {
		const x = Math.floor(Math.random() * 380);
		const obstacle = new Obstacle (x, 0);
		obstacles.push(obstacle);
	}
}

function drawObstacle() {
	obstacles.forEach((obstacle) => obstacle.draw());
}

function checkKeys() {
	document.onkeydown = (event) => {
		switch (event.key) {
				case "ArrowLeft":
				car.moveLeft();
				break;
			case "ArrowRight":
				car.moveRight();
				break;
			default:
				break;
		}
	}
}


function checkCollitions() {
	obstacles.forEach((obstacle) => {
		if (car.isTouching(obstacle)) {
            
      endgame.draw();
      return
		}
	});
}