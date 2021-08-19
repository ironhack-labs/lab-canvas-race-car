/*
TODO
- Pintar road --
- Pintar car --
- Make de car move right and left with arrows --
- Create obstacles (minimo y ancho de carretera) - OJO con los intervalos cortos
	- Class and classchildren
	- Moving obstacles
- Points 

- Intentar que se mueva la carretera
*/

//Variables que necesitaremos por todo
const canvas = document.getElementById('canvas');
let anchoCanvas = canvas.width;
let alturaCanvas = canvas.height;

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};

	function startGame() {
		printRoad();
		printCar();
	}

	function printRoad() {
		const imgRoad = new Image();
		imgRoad.src = '../images/road.png';

		const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');

		const backgroundImage = {
			imgRoad: imgRoad,
			y: 0,
			speed: 1,

			move: function() {
				this.y += this.speed;
				this.y %= canvas.height;
			},

			draw: function() {
				ctx.drawImage(this.imgRoad, 0, this.y, canvas.width, canvas.height);

				if (this.speed < 0) {
					ctx.drawImage(this.imgRoad, 0, this.y + canvas.height, canvas.width, canvas.height);
				} else {
					ctx.drawImage(this.imgRoad, 0, this.y - canvas.height, canvas.width, canvas.height);
				}
			}
		};

		function updateCanvas() {
			backgroundImage.move();

			ctx.clearRect(0, 0, canvas.width, canvas.height);
			backgroundImage.draw();

			requestAnimationFrame(updateCanvas);
		}

		// start calling updateCanvas once the image is loaded
		imgRoad.onload = updateCanvas;

		printCar();
	}

	//Función crear coche
	//---------------------------------------------------------------
	function printCar() {
		const objectCar = canvas.getContext('2d');
		//creamos clase coche con sus metodos
		class Car {
			constructor() {
				this.x = 25;
				this.y = 25;

				// Load the image
				const car = new Image();
				car.addEventListener('load', () => {
					// Once image loaded => draw
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
				objectCar.drawImage(this.car, this.x, this.y, 50, 50);
				objectCar.globalCompositeOperation = 'destination-over';
			}
		}

		const car = new Car();

		document.addEventListener('keydown', (e) => {
			switch (e.keyCode) {
				case 37:
					car.moveLeft();
					break;
				case 39:
					car.moveRight();
					break;
			}
			updateCanvas();
		});

		function updateCanvas() {
			objectCar.clearRect(0, 0, anchoCanvas, alturaCanvas);
			car.draw();
			printRoad();
		}

		updateCanvas();
	}
};

//---------------------------------------------------------------
/*
function printRoad() {
	const printRoad = canvas.getContext('2d');
	let imgRoad = new Image();
	imgRoad.src = '../images/road.png';
	printRoad.drawImage(imgRoad, 0, 0, anchoCanvas, alturaCanvas);
}
*/
