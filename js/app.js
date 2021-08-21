const raceCarApp = {
	ctx: undefined,
	// canvasDOM: undefined,
	canvasSize: { w: undefined, h: undefined },
	intervalId: undefined,
	framesCounter: 0,
	obstacles: [],
	//animals: [],
	speed: 1,
	score: 0,
	y: 0,

	init(canvas, endgame, scoreEnd, buttonRestart, audio, audio2) {
		this.setContext(canvas);
		this.setCanvasDimensions(canvas);

		this.playStartingSound(audio2);
		this.imageBackground = new Image();
		this.imageBackground.src = '../images/road.png';
		this.endgame = endgame;
		this.scoreEnd = scoreEnd;
		this.buttonRestart = buttonRestart;
		this.createNewCar();

		setTimeout(() => {
			this.playBackgroundSong(audio, audio2);

			//console.log(this.endgame);
			// Esto podría estar en otra función, pero ha de estar disponible en todos los sitios
			// si fuese const, no podria ser, por eso le decimos this y lo inicializamos en el objeto
		}, 4000);

		//Que el coche se mueva
		this.setListeners();
		this.refreshScreen();
	},
	setContext(canvas) {
		this.ctx = canvas.getContext('2d');
		this.ctx.globalCompositeOperation = 'source-over';
		this.ctx2 = canvas.getContext('2d');
		this.ctx2.globalCompositeOperation = 'destination-out';
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
			e.code === 'KeyW' ? (this.newCar.moveUpGamer = true) : null;
			e.code === 'KeyS' ? (this.newCar.moveDownGamer = true) : null;
			e.code === 'KeyA' ? (this.newCar.moveLeftGamer = true) : null;
			e.code === 'KeyD' ? (this.newCar.moveRightGamer = true) : null;
		});
		//condicion ternaria, despues del interrogante es el true, despues de los 2 puntos es el false
		document.addEventListener('keyup', (e) => {
			e.key === 'ArrowUp' ? (this.newCar.moveUp = false) : null;
			e.key === 'ArrowDown' ? (this.newCar.moveDown = false) : null;
			e.key === 'ArrowLeft' ? (this.newCar.moveLeft = false) : null;
			e.key === 'ArrowRight' ? (this.newCar.moveRight = false) : null;
			e.code === 'KeyW' ? (this.newCar.moveUpGamer = false) : null;
			e.code === 'KeyS' ? (this.newCar.moveDownGamer = false) : null;
			e.code === 'KeyA' ? (this.newCar.moveLeftGamer = false) : null;
			e.code === 'KeyD' ? (this.newCar.moveRightGamer = false) : null;
		});
	},

	//refrescamos screen
	refreshScreen() {
		this.intervalId = requestAnimationFrame(() => this.refreshScreen());

		//ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.checkIfCollision();
		this.clearCanvas();
		this.drawAll();

		//Pantalla final ending
		//this.showEndingScreen();

		//pintamos coche moviendose
		this.newCar.move();

		this.framesCounter++;

		if (this.framesCounter % 100 === 0) {
			this.createObstacle();
			this.createAnimal();
		}
	},

	playStartingSound(audio2) {
		//starting sound
		this.audio2 = audio2;
		this.audio2.src = '../sounds/marioStart.mp3';

		this.audio2.play();
	},

	playBackgroundSong(audio, audio2) {
		//background song
		this.audio = audio;
		this.audio.src = '../sounds/krt.mp3';

		this.audio.play();
	},

	audioPause() {
		this.audio = document.getElementById('backgroundMusic');
		this.audio2 = document.getElementById('startingSound');

		this.audio.pause();
		this.audio2.pause();
	},

	drawAll() {
		this.drawBackground();
		this.moveBackground();
		this.newCar.drawCar();

		this.obstacles.forEach((obstacle) => obstacle.draw());
		//this.animals.forEach((animal) => animal.draw());

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

	// createAnimal() {
	// 	//const randomWidth = Math.trunc(Math.random() * (300 - 100) + 100);
	// 	//const randomHeight = Math.trunc(Math.random() * (100 - 70) + 70);
	// 	const randomWidth = 80;
	// 	const randomHeight = 100;
	// 	const xRandomPosition = Math.trunc(Math.random() * (this.canvasSize.w - 100));

	// 	const newAnimal = new Animal(this.ctx, randomWidth, randomHeight, this.canvasSize, xRandomPosition, this.speed);

	// 	this.animals.push(newAnimal);
	// },

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
		this.ctx.font = '35px Verdana';
		this.ctx.fillStyle = 'red';
		this.ctx.fillText('Score: ' + this.score++, 50, 90);
	},

	stopScore() {
		this.ctx.font = '0px Verdana';
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
		//Despues de probar todos los globalCompositeOperation, este es el mejor
		this.ctx.globalCompositeOperation = 'destination-over';
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
					this.stopGame();
				}
			});
		}
	},

	stopGame() {
		//https://www.youtube.com/watch?v=eI9idPTT0c4&ab_channel=ChrisCourses
		//este recurso ha ido bien para acabar la parte del menú final
		window.cancelAnimationFrame(this.intervalId);
		this.endgame.style.display = 'initial';
		this.scoreEnd.innerHTML = this.score;

		//Hacer un refresh
		this.buttonRestart.setAttribute('onclick', 'window.location.reload()');

		//llamamos a parar el audio
		this.audioPause();
		//Limpiamos el score ya que lo mostramos por pantalla al finalizar
		this.stopScore();
	}
};
