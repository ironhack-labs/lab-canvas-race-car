const $canvas = document.querySelector("canvas");
const $button = document.querySelector("button");
const ctx = $canvas.getContext("2d");

let frames = 0;
let liveScore = 0
const obstacles = [];



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
// // 1. Forma 1: setInterval
// function start() {
// 	setInterval(() => {
// 		update();
// 	}, 1000 / 60);
// }

// function update() {
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// }

// 2. Forma 2: SetTimeout
// function start() {
// 	setTimeout(() => {
// 		update();
// 	}, 300);
// }

// function update() {
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// 	setTimeout(() => update(), 300);
// }

// 3. Forma 3: requestAnimationFrame
// function start() {
// 	update();
// }

// function update() {
// 	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
// 	ctx.fillStyle = getRandomColor();
// 	ctx.fillRect(250, 150, 100, 100);
// 	requestAnimationFrame(update);
// }

class Board {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = $canvas.width;
		this.height = $canvas.height;
		this.image = new Image();
		this.image.src =
			"images/road.png";
	}

	draw() {
		this.y+=4;
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

class Car {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 60;
		this.image = new Image();
		this.move = 30;
		this.image.src =
			"images/car.png";
	}

	draw() {
		if (this.x > $canvas.width - this.width - 60) 
      this.x = $canvas.width - this.height - 60;
    
    if (this.x < 65)
    this.x = 65
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

class Obstacle extends Car {
	constructor(x, y) {
		super(x, y);
		this.image.src =
      "images/obstacle.png";
      this.height = 30
      this.width = 180
	}
	draw() {
		this.y+=4;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}

class Score {
  draw() {
    this.x = 100
    this.y= 60
    ctx.fillText = liveScore;
    ctx.font = "50px sans";
    ctx.fillStyle = blue
  }
}
const car1 = new Car(200, 200);
const board = new Board();
let score = new Score

function start() {
	// setInterval(() => {
	update();
	// }, 1000 / 60);
}

function update() {
	// 1. calcular o recalcular el estado de nuestro programa
	frames++;
	checkKeys();
	generateObstacles();
	checkCollitions();

	// 2. Limpiar el canvas
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);
	// 3. Dibujar los elementos
	board.draw();
	car1.draw();
  drawObstacles();
  scoreUpdate();
	requestAnimationFrame(update);
}

// Funciones de apoyo

function checkCollitions() {
	obstacles.forEach((obstacle) => {
		if (car1.isTouching(obstacle)) {
			alert("Chocaste!");
		}
	});
}

function generateObstacles() {
	if (frames % 140 === 0) {
		const x = Math.floor(Math.random() * 380);
		const obstacle = new Obstacle(x, 0);
		obstacles.push(obstacle);
	}
}

function drawObstacles() {
	obstacles.forEach((obstacle) => obstacle.draw());
}

function checkKeys() {
	document.onkeydown = (event) => {
		switch (event.key) {
			case "ArrowLeft":
				car1.moveLeft();
				break;
			case "ArrowRight":
				car1.moveRight();
				break;

			default:
				break;
		}
	};
}
function scoreUpdate() {
  liveScore = Math.floor(frames/60);
}
function drawScore() {

}
$button.onclick = start;

}