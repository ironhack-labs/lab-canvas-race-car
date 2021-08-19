/*
TODO
1) Pintar road --
2) Pintar car --
3) Make de car move right and left with arrows --

4) Create obstacles (minimo y ancho de carretera) - OJO con los intervalos cortos
	4-1) Class and classchildren
	4.2) Moving obstacles
//apuntes
- que sea una clase
- que vaya haciendo randoms
- de diferentes medidas
- pintando de arriba a abajo


5) Points 

Bonus
6) Intentar que se mueva la carretera

Obstaculos
	6.1) Pintar carretera antes que se mueva --
	6.2) Bajar velocidad carretera al llamar cada vez dentro del addEventListener, esta llama a la misma funcion
	y aumenta la velocidad
*/
//---------------------------------------------------------------
//Variables que necesitaremos por todo

//---------------------------------------------------------------
window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
	//---------------------------------------------------------------
	function startGame() {
		const canvas = document.getElementById('canvas');

		//anchura - altura
		let anchoCanvas = canvas.width;
		let alturaCanvas = canvas.height;

		//context
		const printRoad = canvas.getContext('2d');
		const objectCar = canvas.getContext('2d');
		const obstaculo = canvas.getContext('2d');

		let imgRoad = new Image();
		imgRoad.src = '../images/road.png';

		//---------------------------------------------------------------
		// Background image - Game area
		const backgroundImage = {
			imgRoad: imgRoad,
			y: 0,
			speed: 1,

			move: function() {
				this.y += this.speed;
				this.y %= canvas.height;
				//alert((this.y %= canvas.height));
			},

			draw: function() {
				printRoad.drawImage(this.imgRoad, 0, this.y, anchoCanvas, alturaCanvas);

				if (this.speed < 0) {
					printRoad.drawImage(this.imgRoad, 0, this.y + alturaCanvas, anchoCanvas, alturaCanvas);
				} else {
					printRoad.drawImage(this.imgRoad, 0, this.y - alturaCanvas, anchoCanvas, alturaCanvas);
				}

				//this.y = this.x;
			}

			// remove: function() {
			// 	printRoad.clearRect(imgRoad, 0, 0, canvas.width, canvas.height);
			// }
		};

		//---------------------------------------------------------------
		// Class car
		class Car {
			constructor() {
				this.x = anchoCanvas / 2 - 30;
				this.y = alturaCanvas / 2 + 250;
				this.health = 1;

				const car = new Image();
				car.addEventListener('load', () => {
					this.car = car;
					this.draw();
				});
				car.src = '../images/car.png';
			}
			moveLeft() {
				this.x -= 25;
			}
			moveRight() {
				this.x += 25;
			}
			draw() {
				//printRoad.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
				objectCar.drawImage(this.car, this.x, this.y, 50, 50);
				//objectCar.globalCompositeOperation = 'destination-over';
			}

			receiveDamage(damage) {
				this.health -= damage;
				return 'Coche boom';
			}
		}
		//---------------------------------------------------------------
		const car = new Car();
		//---------------------------------------------------------------
		// document.addEventListener('keydown', (e) => {
		document.onkeydown = function(e) {
			switch (e.keyCode) {
				case 37:
					car.moveLeft();
					break;
				case 39:
					car.moveRight();
					break;
			}
			updateCanvas();
		};
		//---------------------------------------------------------------
		// OBSTACULOS - sin objetos, tal cómo hemos empezado, mal acabamos
		const myObstacles = [];
		class Obstaculo {
			constructor() {}
			// 	constructor(x, speed, width, height, color) {
			// 		this.x = x;
			// 		this.speed = speed;
			// 		this.width = width;
			// 		this.height = height;
			// 		this.color = color;

			draw() {
				// obstaculo.drawImage(this.car, this.x, this.y, 50, 50);
			}

			crash() {}
		}

		// 	//metodo update para pintar
		// 	draw(x, speed, width, height, color) {
		// 		const ctx = canvas.getContext('2d');
		// 		ctx.fillStyle = color;
		// 		ctx.fillRect(x, speed, width, height);
		// 	}

		// 	//metodo crash
		// 	crash() {}
		// }

		// let speed1 = 0;

		// const obstaculo = new Obstaculo(50, speed1, 100, 30, 'red');
		//---------------------------------------------------------------
		function updateCanvas() {
			speed1 = 1;
			//backgroundImage.remove();
			backgroundImage.move();
			// redraw the canvas
			// obstaculo.draw(50, speed1, 100, 30, 'red');
			// obstaculo.draw(150, speed1, 100, 30, 'green');
			// obstaculo.draw(250, speed1, 100, 30, 'yellow');

			objectCar.clearRect(0, 0, anchoCanvas, alturaCanvas);
			backgroundImage.draw();
			car.draw();
			// obstaculo.draw();

			requestAnimationFrame(updateCanvas);
		}
		//---------------------------------------------------------------
		imgRoad.onload = updateCanvas;
	}
	//---------------------------------------------------------------
};
//---------------------------------------------------------------
//Otros testings
