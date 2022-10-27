const app = {
	appName: "Island Racer",
	version: "1.0.0",
	license: undefined,
	author: "Manuel Atance",
	description: "Mi primerito Canvas, wish me luck",
	ctx: undefined,
	obstacles: [],
	imageInstance: undefined,
	canvasSize: {
		w: 500,
		h: 700,
	},
	carData: {
		pos: { x: 250, y: 600 },
		size: { w: 158 / 3, h: 319 / 3 }, // Original proportions divided by 3
		image: "images/car.png",
		speed: 15,
	},
	framesCounter: 0,
	obsScore: 0,
	isGame: true,
	init() {
		if (this.isGame) {
			this.setContext();
			this.drawBackground();
			this.createCar();
			this.setEventHandlers();

			this.start();
		}
	},
	setContext() {
		this.ctx = document.querySelector("#canvas").getContext("2d");
		// console.log("estoy aquí");
	},
	setEventHandlers() {
		document.onkeydown = (event) => {
			switch (event.key) {
				case "ArrowLeft":
					this.moveLeft();
					break;
				case "ArrowRight":
					this.moveRight();
					break;
				case "ArrowUp":
					this.moveUp();
					break;
				case "ArrowDown":
					this.moveDown();
					break;
			}
		};
	},
	drawBackground() {
		this.ctx.fillStyle = "green";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);

		this.ctx.fillStyle = "gray";
		this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h);

		this.ctx.lineWidth = 20;
		this.ctx.strokeStyle = "white";
		this.ctx.beginPath();
		this.ctx.moveTo(80, 0);
		this.ctx.lineTo(80, this.canvasSize.h);
		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.lineWidth = 10;
		this.ctx.beginPath();
		this.ctx.setLineDash([40, 40]);
		this.ctx.moveTo(this.canvasSize.w / 2, 0);
		this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h);
		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.lineWidth = 20;
		this.ctx.setLineDash([0]);
		this.ctx.beginPath();
		this.ctx.moveTo(this.canvasSize.w - 80, 0);
		this.ctx.lineTo(this.canvasSize.w - 80, this.canvasSize.h);
		this.ctx.stroke();
		this.ctx.closePath();

		// console.log("estoy aquí");
	},
	moveLeft() {
		if (this.carData.pos.x < this.carData.size.w + 30) {
			return;
		}
		this.carData.pos.x -= this.carData.speed;
	},
	moveRight() {
		if (this.carData.pos.x >= this.canvasSize.w - this.carData.size.w - 20) {
			return;
		}
		this.carData.pos.x += this.carData.speed;
	},
	moveUp() {
		if (this.carData.pos.y < this.carData.size.h - this.carData.pos.y) {
			return;
		}
		this.carData.pos.y -= this.carData.speed;
	},
	moveDown() {
		if (this.carData.pos.y >= this.canvasSize.h - this.carData.size.h - 20) {
			return;
		}
		this.carData.pos.y += this.carData.speed;
	},

	createCar() {
		this.imageInstance = new Image();
		this.imageInstance.src = this.carData.image;
	},
	start() {
		setInterval(() => {
			if (this.isGame) {
				this.framesCounter++;

				if (this.framesCounter % 30 === 0) this.createObstacle();

				this.clearAll();
				this.drawBackground();
				this.drawAll();
				this.getScore();
				this.drawText(`Score: ${this.obsScore}`);
			}
			this.obstacles.forEach((obs) => {
				if (
					this.carData.pos.x - 20 < obs.obsPosx + obs.obsSizew &&
					this.carData.pos.x + this.carData.size.w > obs.obsPosx + 30 &&
					this.carData.pos.y < obs.obsPosy + obs.obsSizeh + 40 &&
					this.carData.pos.y + this.carData.size.h > obs.obsPosy
				) {
					this.blackScreen();
					this.youLost();
					this.endscore();
					this.isGame = false;
				}
			});
		}, 50);
	},
	clearAll() {
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
	},
	drawAll() {
		this.ctx.drawImage(
			this.imageInstance,
			this.carData.pos.x - this.carData.size.w / 2,
			this.carData.pos.y - this.carData.size.h / 2,
			this.carData.size.w,
			this.carData.size.h
		);
		this.obstacles.forEach((obs) => obs.drawObstacle());
	},
	createObstacle() {
		this.obstacles.push(new Obstacle(this.ctx, this.canvasSize));
	},
	drawText(text) {
		this.ctx.fillStyle = "white";
		this.ctx.font = "30px arial";
		this.ctx.fillText(text, 100, 100);
	},

	getScore() {
		this.obstacles.forEach((obs) => {
			if (obs.obsPosy === this.canvasSize.h) {
				this.obsScore++;
			}
		});
	},
	blackScreen() {
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
	},
	endscore() {
		this.ctx.fillStyle = "white";
		this.ctx.font = "45px arial";
		this.ctx.fillText(`your score is: ${this.obsScore}`, 80, 450);
	},
	youLost() {
		this.ctx.fillStyle = "red";
		this.ctx.font = "70px arial";
		this.ctx.fillText("Game Over!", 60, 300);
	},
};
