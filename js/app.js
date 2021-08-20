const raceCarApp = {
	ctx: undefined,
	// canvasDOM: undefined,
	canvasSize: { w: undefined, h: undefined },
	intervalId: undefined,
	framesCounter: 0,
	obstacles: [],
	speed: 1,
	score: 0,
	y: 0,
	//speed: 1,

	init(canvas) {
		this.setContext(canvas);
		this.setCanvasDimensions(canvas);
		this.createNewCar();
		// Esto podría estar en otra función, pero ha de estar disponible en todos los sitios
		// si fuese const, no podria ser, por eso le decimos this y lo inicializamos en el objeto
		this.imageBackground = new Image();
		this.imageBackground.src = './images/road.png';

		//Que el coche se mueva
		this.setListeners();
		this.refreshScreen();
	},

	//----------------------------------------------
	// moveBackGround: function() {
	// 	this.y += this.speed;
	// 	this.y %= canvas.height;
	// },

	// drawBackGround: function() {
	// 	let imgRoad = new Image();
	// 	imgRoad.src = './images/road.png';

	// 	ctx.drawImage(this.imgRoad, 0, this.y, canvasSize.w, canvasSize.h);

	// 	if (this.speed < 0) {
	// 		ctx.drawImage(this.imgRoad, 0, this.y + canvasSize.h, canvasSize.w, canvasSize.h);
	// 	} else {
	// 		ctx.drawImage(this.imgRoad, 0, this.y - canvasSize.h, canvasSize.w, canvasSize.h);
	// 	}
	// },
	//----------------------------------------------
	setContext(canvas) {
		this.ctx = canvas.getContext('2d');
	},

	setCanvasDimensions(canvas) {
		this.canvasSize.w = 500;
		this.canvasSize.h = 700;
		canvas.setAttribute('width', this.canvasSize.w);
		canvas.setAttribute('height', this.canvasSize.h);
	},

	createNewCar() {
		//creamos objeto coche
		this.newCar = new Car(this.ctx, 80, 100, this.canvasSize);
	},

	setListeners() {
		//condicion ternaria, despues del interrogante es el true, despues de los 2 puntos es el false
		document.addEventListener('keydown', (e) => {
			e.key === 'ArrowUp' ? (this.newCar.moveUp = true) : null;
			e.key === 'ArrowDown' ? (this.newCar.moveDown = true) : null;
			e.key === 'ArrowLeft' ? (this.newCar.moveLeft = true) : null;
			e.key === 'ArrowRight' ? (this.newCar.moveRight = true) : null;
		});
		//condicion ternaria, despues del interrogante es el true, despues de los 2 puntos es el false
		document.addEventListener('keyup', (e) => {
			e.key === 'ArrowUp' ? (this.newCar.moveUp = false) : null;
			e.key === 'ArrowDown' ? (this.newCar.moveDown = false) : null;
			e.key === 'ArrowLeft' ? (this.newCar.moveLeft = false) : null;
			e.key === 'ArrowRight' ? (this.newCar.moveRight = false) : null;
		});
	},

	//refrescamos screen
	refreshScreen() {
		this.intervalId = requestAnimationFrame(() => this.refreshScreen());

		//ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.checkIfCollision();
		this.clearCanvas();
		this.drawAll();

		this.newCar.move();

		this.framesCounter++;

		if (this.framesCounter % 200 === 0) {
			this.score++;
		}

		if (this.framesCounter % 100 === 0) {
			this.createObstacle();
		}

		// backgroundImage.move();
		// ctx.clearRect(0, 0, canvas.width, canvas.height);
		// backgroundImage.draw();
	},

	drawAll() {
		this.drawBackground();
		this.moveBackground();
		this.newCar.drawCar();
		this.obstacles.forEach((obstacle) => obstacle.draw());

		this.showScores();
	},

	createObstacle() {
		//const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
		//const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
		const randomWidth = 80;
		const randomHeight = 100;
		const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - 100));

		const newObstacle = new obstacles(
			this.ctx,
			randomWidth,
			randomHeight,
			this.canvasSize,
			xRandomPosition,
			this.speed
		);

		this.obstacles.push(newObstacle);
	},

	drawBackground() {
		//this.ctx.drawImage(this.imageBackground, 0, 0, this.canvasSize.w, this.canvasSize.h);

		this.ctx.drawImage(this.imageBackground, 0, this.y, this.canvasSize.w, this.canvasSize.h);

		if (this.speed < 0) {
			this.ctx.drawImage(
				this.imageBackground,
				0,
				this.y + this.canvasSize.h,
				this.canvasSize.w,
				this.canvasSize.h
			);
		} else {
			this.ctx.drawImage(
				this.imageBackground,
				0,
				this.y - this.canvasSize.h,
				this.canvasSize.w,
				this.canvasSize.h
			);
		}
	},

	moveBackground() {
		this.y += this.speed;
		this.y %= this.canvasSize.h;
	},

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
	},

	showScores() {
		// show scores
		this.ctx.font = '25px Verdana';
		this.ctx.fillStyle = 'black';
		this.ctx.fillText('Score: ' + this.score, 300, 90);
	},

	checkIfCollision() {
		if (this.obstacles.length) {
			this.obstacles.forEach((elem) => {
				elem.draw();

				if (
					this.newCar.carPosition.x < elem.obstaclePosition.x + elem.obstacleSize.w - 10 &&
					this.newCar.carPosition.x + this.newCar.carSize.w - 10 > elem.obstaclePosition.x &&
					this.newCar.carPosition.y < elem.obstaclePosition.y + elem.obstacleSize.h - 10 &&
					this.newCar.carSize.h - 10 + this.newCar.carPosition.y > elem.obstaclePosition.y
				) {
					//clearInterval(this.intervalId);
					window.cancelAnimationFrame(this.intervalId);
				}
			});
		}
	}

	// looser() {
	//   // this.ctx.drawImage(this.image, 0, 0, this.canvasSize.w, this.canvasSize.h);
	// },

	// reset() {
	//   this.score = 0
	//   this.obstacles = []
	//   this.start()
	// }
};

// const backgroundImage = {
// 	imgRoad: imgRoad,
// 	y: 0,
// 	speed: 1,

// 	move: function() {
// 		this.y += this.speed;
// 		this.y %= canvas.height;
// 	},

// 	draw: function() {
// 		ctx.drawImage(this.imgRoad, 0, this.y, canvas.width, canvas.height);

// 		if (this.speed < 0) {
// 			ctx.drawImage(this.imgRoad, 0, this.y + canvas.height, canvas.width, canvas.height);
// 		} else {
// 			ctx.drawImage(this.imgRoad, 0, this.y - canvas.height, canvas.width, canvas.height);
// 		}
// 	}
// };
