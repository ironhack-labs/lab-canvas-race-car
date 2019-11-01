const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const obstacles = [];
let interval;
let frames = 0;
let score = 0;
/**
 * Clases
 */
class Board {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = canvas.width;
		this.heigth = canvas.height;
	}

	draw() {
		//Area verde
		ctx.fillStyle = 'green';
		ctx.fillRect(this.x, this.y, canvas.width, canvas.height);
		ctx.strokeRect(this.x, this.y, canvas.width, canvas.height);
		//Carretera
		ctx.fillStyle = '#808080';
		ctx.fillRect(this.x + 30, this.y, canvas.width - 60, canvas.height);
		//Lineas blancos
		ctx.strokeStyle = '#FFFFFF';
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.moveTo(40, this.y);
		ctx.lineTo(40, 500);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.moveTo(canvas.width - 40, this.y);
		ctx.lineTo(canvas.width - 40, 500);
		ctx.stroke();
		ctx.closePath();
		//Rayas blancas
		for (let i = 0; i < canvas.height; i++) {
			if (i % 30 === 0) {
				ctx.strokeStyle = '#FFFFFF';
				ctx.lineWidth = 5;
				ctx.beginPath();
				ctx.moveTo(150, i);
				ctx.lineTo(150, i + 20);
				ctx.stroke();
				ctx.closePath();
			}
		}
	}
}

class Car {
	constructor() {
		this.width = 25;
		this.heigth = 50;
		this.x = 140;
		this.y = 420;
		this.vx = 5;
		this.img = new Image();
		this.img.src = './images/car.png';
		this.onload = () => {
			this.draw();
		};
		this.hp = 3;
	}

	draw() {
		ctx.drawImage(
			// imagen de fuente
			this.img,
			// posición de x en canvas (destino, dx)
			this.x,
			// posición de y en canvas (destino, dy)
			this.y,
			// ancho desde la posición de x en canvas (dw)
			25,
			// alto desde la posición de y en canvas (dh)
			50
		);
	}

	moveLeft() {
		if (this.x >= this.x - 100) {
			this.x -= this.vx;
		}
	}

	moveRight() {
		if (this.x <= this.x + 100) {
			this.x += this.vx;
		}
	}

	isTouching(obstacle) {
		return (
			this.x < obstacle.x + obstacle.width &&
			this.x + this.width > obstacle.x &&
			this.y < obstacle.y + obstacle.height &&
			this.y + this.width > obstacle.y
		);
	}
}

class Obstacles {
	constructor() {
		this.y = 0;
		this.width = Math.floor(Math.random() * 150);
		this.x = Math.floor(Math.random() * (250 - this.width)) + 30;
		this.height = 10;
		this.vy = 2;
	}

	draw() {
		if (this.x < 440 - this.width) {
		}
		ctx.fillStyle = 'brown';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		//ctx.strokeRect(this.x, this.y, 100, this.height);
	}
}
/**
 * Logica de juego
 */
const board = new Board();
const car = new Car();

/**
 * Start game
 */

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
	frames++;
	clearCanvas();
	checkColitions();
	board.draw();
	car.draw();
	generateObstacles();
	obstacles.forEach((obstacle) => (obstacle.y += obstacle.vy));
	drawObstacles();
	keepScore();
	drawScore();
}

function generateObstacles() {
	if (frames % 200 === 0) {
		const obstacle = new Obstacles();
		obstacles.push(obstacle);
	}
}

function keepScore() {
	if (frames % 200 === 0) {
		score++;
	}
}

function drawScore() {
	ctx.font = '30px Arial';
	ctx.fillText(`Score: ${score}`, 10, 25);
}

function drawObstacles() {
	obstacles.forEach((obstacle) => obstacle.draw());
}

function checkColitions() {
	obstacles.forEach((obstacle) => {
		console.log(car);
		if (car.isTouching(obstacle)) {
			gameOver();
		}
	});
}

function gameOver() {
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#FFFFFF';
	ctx.font = '30px Arial';
	ctx.fillText(`Game Over`, canvas.width / 2, 30);
	ctx.fillStyle = '#FFFFFF';
	ctx.font = '20px Arial';
	ctx.fillText(`Your Score: ${score}`, canvas.width / 2, 50);
	clearInterval(interval);
}

window.onload = function() {
	document.getElementById('start-button').onclick = function() {
		startGame();
	};

	function startGame() {
		interval = setInterval(update, 1000 / 60);
	}
};

document.onkeydown = (e) => {
	switch (e.keyCode) {
		case 37:
			car.moveLeft();
			return;
		case 39:
			car.moveRight();
			return;
	}
};
