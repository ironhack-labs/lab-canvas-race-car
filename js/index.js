// 1. Traer los elementos del DOM (CANVAS)
const $canvas = document.getElementById("canvas");
const $button = document.getElementById('start-button')
const ctx = $canvas.getContext("2d");



// 2. Definir las variables globales
const frames = 0;
const obstacles = [];





// 3. Definir las clases del juego (Propiedades y metodos

class Board {
    constructor(){
        this.x = 0;
		this.y = 0;
		this.width = $canvas.width;
		this.height = $canvas.height;
		this.image = new Image();
		this.image.src ="images/road.png";
    }
	
	draw(){
		this.y+=6;
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
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 60;
		this.image = new Image();
		this.move = 20;
		this.image.src = "/images/car.png";
	}

	draw() {
		if (this.x > $canvas.width - this.width - 50) 
      	this.x = $canvas.width - this.width - 50;

    	if (this.x < 50)
    	this.x = 50
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
		this.image.src = "/images/obstaculo.png"
		this.width = 160
      	this.height = 30
	}

	draw() {
		this.y+=6;
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}


class Score {
	constructor() {
		this.x = 100
		this.y= 60
		this.score = 0
	};

	draw(){
		ctx.fillText(this.score, 250, 250);
		ctx.fillStyle = "white";
	}
	scoreIncrement(){
		this.score++
	}
}





// 4. Instancias de las clases 

const carretera = new Board();
const car = new Car(200, 250),




// 5. Crear las funciones de apoyo




function checkCollitions() {
	obstacles.forEach(obstacle => {
		if (car.isTouching(obstacle)) {
			alert("Chocaste!");
		}
	});
}



function generateObstacles() {
	if (frames % 160 === 0) {
		const x = Math.floor(Math.random() * 320);
		const obstacle = new Obstacle(x, 0);
		obstacles.push(obstacle);
	}
}



function drawObstacles() {
	obstacles.forEach((obstacle) => obstacle.draw());
}



function checkKeys() {
	document.onkeydown = (event) => {
		event.preventDefault()
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
	};
}



function drawScore() {
	obstacles.forEach((obstacle)=> {
		if(obstacle.y + obstacle.height > car.y + car.height) {
			Score.scoreIncrement()
		}
	})
Score.draw()
}





function update() {
	// 1. calcular o recalcular el estado de nuestro programa
	frames++;
	checkKeys();
	
	// 2. Limpiar el canvas
	ctx.clearRect(0, 0, $canvas.width, $canvas.height);

	// 3. Dibujar los elementos
	carretera.draw();
	car.draw();
  	drawObstacles();
	generateObstacles();
	checkCollitions();
	requestAnimationFrame(update);
}


// 6. Iniciar el juego


function startGame() {
	update();
}

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
	  startGame();
    };
}

$button.onclick = startGame();




