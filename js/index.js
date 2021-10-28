const raceCarApp = {

	name: 'Race Car app',
	author: 'mmonereo',
	car: undefined,
	boundaryLeft: undefined,
	boundaryRight: undefined,
	obstacles: [],
	obsLen: undefined,
	canvasDOM: document.querySelector('#canvas'),
	ctx: undefined,
	canvasSize: { width: undefined, height: undefined },


	atLoad(){
		this.setObjProperties();
		this.setCtx()
		this.createCar();
	},

	startGame(){
		this.paintBoard();
		this.car.paintCar();
		this.setListeners();
		for (let i = 0; i < 30; i++) {
			this.createObstacle();
		}
		this.obsLen = this.obstacles.length;
		console.log(this.i)
		setInterval(()=>{
			this.updateBoard()
		}, 100);
	},

	updateBoard(){

		let i = 
		this.paintBoard();
		this.car.paintCar();
		
		if (this.obsLen){
			this.obsLen--;
			this.obstacles[this.obsLen].updateObstacle();
			this.obstacles[this.obsLen].paintObstacle();
			
		}

	},

	setObjProperties(){
		this.canvasSize.width = 500;
		this.canvasSize.height = 700;
		
	},

	setCtx(){
		this.ctx = this.canvasDOM.getContext("2d");
	},

	createCar(){
		this.car = new Car(this.ctx, (this.canvasSize.width - 39.5) / 2, this.canvasSize.height - (79.75 + 20), 39.5, 79.75, 1);
	
	},

	paintBoard(){
		this.paintGreenBoard();
		this.paintGreyBoard();
		this.paintWhiteBoard(50, 10);
		this.paintWhiteBoard(this.canvasSize.width - (60), 10);
		this.boundaryLeft = 50;
		this.boundaryRight = this.canvasSize.width - 60;
		this.paintLinesBoard()
	},


	paintGreenBoard(){
		let ctx = this.ctx;
		ctx.fillStyle = "#018100";
		ctx.fillRect(0,0,this.canvasSize.width, this.canvasSize.height);
	},

	paintGreyBoard() {
		let ctx = this.ctx;
		let widthCorrection = 40;
		ctx.fillStyle = "#808080";
		
		ctx.fillRect(widthCorrection, 0, this.canvasSize.width - (widthCorrection * 2), this.canvasSize.height);
	},

	paintWhiteBoard(xStart, width){
		let ctx = this.ctx;
		let widthCorrection = xStart;
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(widthCorrection, 0, width, this.canvasSize.height);
	},

	paintLinesBoard(){
		let ctx = this.ctx;
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.setLineDash([20, 15]);
		ctx.strokeStyle = "#FFFFFF";
		ctx.moveTo(this.canvasSize.width / 2, 20);
		ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height);
		ctx.stroke()
	},

	randomInt(min, max){
		return Math.random() * (max - min) + min;
	},

	createObstacle(){
		let startX = this.randomInt(this.boundaryLeft, this.boundaryRight);
		let endX = this.randomInt(startX, this.boundaryRight);
		let newObstacle = new Obstacle(this.ctx, startX, 20, endX, 80);

		this.obstacles.push(newObstacle);
	},

	removeObstacle(obstacle){
		if (this.obstacle.posStartY > this.canvasSize.height){
			this.obstacles.pop();
		}
	},

	setListeners(){
		document.onkeydown = evn => {

			evn.key === 'ArrowLeft' ? this.car.moveLeft() : null
			evn.key === 'ArrowRight' ? this.car.moveRight() : null
		}
	}

}

class Car {

	constructor( ctx, posX, posY, width, height, speed){
		this.ctx = ctx
		this.posX = posX;
		this.posY = posY;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.carImg = undefined;
		
		this.loadCar()
	}

	loadCar(){
		let carImg = new Image();
		carImg.src = "../images/car.png";
		this.carImg = carImg;
	}

	paintCar() {
	
		this.ctx.drawImage(this.carImg, this.posX, this.posY, this.width, this.height);
	}

	moveLeft(){
		if (this.posX > raceCarApp.boundaryLeft){
			this.posX -= 10;
		}
	}

	moveRight() {
		if (this.posX < raceCarApp.boundaryRight){
			this.posX += 10;
		}
	}
}

class Obstacle{

	constructor(ctx, posStartX, posStartY, posEndX, posEndY){
		this.ctx = ctx
		this.posStartX = posStartX;
		this.posStartY = posStartY;
		this.posEndX = posEndX;
		this.posEndY = posEndY;
	}

	paintObstacle(obstacle){
		let ctx = this.ctx;
		ctx.fillStyle = '#890000';
		ctx.fillRect(this.posStartX, this.posStartY, this.posEndX, this.posEndY);
	}

	updateObstacle(obstacle){
		this.posStartY += 20;

	}
}




window.onload = () => {
	document.getElementById('start-button').onclick = () => {
	
		raceCarApp.startGame();
		console.log(raceCarApp.car);

	};

	raceCarApp.atLoad();

};

