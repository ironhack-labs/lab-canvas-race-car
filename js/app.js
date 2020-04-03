const app = {
	canvasDom: undefined,
	ctx: undefined,
	canvasSize: {
		width: 500,
		height: 700
	},
	myCar: undefined,
	frames: 0,
	obstacles: [],

	init(id) {
		this.canvasDom = document.getElementById(id);
		this.canvasDom.width = this.canvasSize.width;
		this.canvasDom.height = this.canvasSize.height;
		this.ctx = this.canvasDom.getContext('2d');
		this.obstacles.push(new Obstacle(this.ctx));
		this.myCar = new Car(this.ctx, 100, 600, 40, 80, this.canvasSize);
		this.interval = setInterval(() => {
			this.clearScreen();
			this.drawBackground();		
			this.frames++
			this.frames % 50 === 0 ? this.drawObstacle() : null
			this.drawCar();
			this.myCar.move();
			
		}, 10);
		this.setEventListeners();
	},

	drawBackground() {
		this.ctx.fillStyle = 'green';
		this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);

		this.ctx.fillStyle = 'grey';
		this.ctx.fillRect(30, 0, this.canvasSize.width - 60, this.canvasSize.height);

		this.ctx.setLineDash([ 0, 0 ]);
		this.ctx.strokeStyle = 'white';
		this.ctx.lineWidth = 10;
		this.ctx.strokeRect(50, -20, this.canvasSize.width - 100, this.canvasSize.height + 30);

		this.ctx.lineWidth = 5;
		this.ctx.beginPath();
		this.ctx.setLineDash([ 40, 20 ]);
		this.ctx.moveTo(this.canvasSize.width / 2, -10);
		this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height);
		this.ctx.stroke();
	},

	clearScreen() {
		this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
	},
	setEventListeners() {
		document.onkeyup = (e) => {
			e.keyCode === 37 ? this.myCar.move('left') : null;
			e.keyCode === 39 ? this.myCar.move('rigth') : null;
		};
	},
	drawCar() {
		this.myCar.draw();
	},
	drawObstacle() {
		this.obstacles.forEach((obstacle) => {
			obstacle.drawObstacle();
			obstacle.moveObstacle();
		});
	}
};

class Car {
	constructor(ctx, posX, posY, carW, carH, canvasSize) {
		this.ctx = ctx;
		this.posX = posX;
		this.posY = posY;
		this.car = undefined;
		this.carW = carW;
		this.carH = carH;
		this.canvasSize = {
			width: canvasSize.width,
			height: canvasSize.height
		};
		this.vel = 20;
	}
	draw() {
		this.car = new Image();
		this.car.src = `images/car.png`;
		this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH);
	}
	move(dir) {
		dir === 'rigth' ? (!this.rigthCollide() ? (this.posX += this.vel) : null) : null;
		dir === 'left' ? (!this.leftCollide() ? (this.posX -= this.vel) : null) : null;

		this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH);
	}

	leftCollide() {
		return this.posX <= 45 ? true : false;
	}

	rigthCollide() {
		return this.posX >= 405 ? true : false;
	}
}

class Obstacle {
	constructor(ctx) {
		this.ctx = ctx;
		this.posX = 30;
		// this.posX = Math.floor(Math.random() * app.canvasSize.width) - 60;
		this.posY = 0;
		this.width = 100;
		// this.width = Math.floor(Math.random() * 250);
		this.height = 30;
		this.vel = 10;
	}

	drawObstacle() {
		this.ctx.fillStyle = 'red';
		this.ctx.rect(this.posX, this.posY, this.width, this.height);
			console.log(this.posY);
	}

	moveObstacle() {
		this.posY += this.vel;
		console.log(this.posY);
		
	}
}
