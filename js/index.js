/*
TODO
1) Pintar road --
2) Pintar car --
3) Make de car move right and left with arrows --
4) Create obstacles (minimo y ancho de carretera) - OJO con los intervalos cortos
	4-1) Class and classchildren
	4.2) Moving obstacles
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

		let imgRoad = new Image();
		imgRoad.src = '../images/road.png';

		//---------------------------------------------------------------
		const backgroundImage = {
			imgRoad: imgRoad,
			y: 0,
			//x: 1,
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
		class Car {
			constructor() {
				this.x = anchoCanvas / 2 - 30;
				this.y = alturaCanvas / 2 + 250;

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
		}
		//---------------------------------------------------------------
		const car = new Car();
		//---------------------------------------------------------------
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
		//---------------------------------------------------------------
		function updateCanvas() {
			//backgroundImage.remove();
			//backgroundImage.move();
			objectCar.clearRect(0, 0, anchoCanvas, alturaCanvas);
			backgroundImage.draw();
			car.draw();

			requestAnimationFrame(updateCanvas);
		}
		//---------------------------------------------------------------
		//updateCanvas();
		imgRoad.onload = updateCanvas;
	}
	//---------------------------------------------------------------
};
//---------------------------------------------------------------
//Otros testings
/*
function printRoad() {
	const printRoad = canvas.getContext('2d');
	let imgRoad = new Image();
	imgRoad.src = '../images/road.png';
	printRoad.drawImage(imgRoad, 0, 0, anchoCanvas, alturaCanvas);
}
*/
//Función crear coche
// function printCar() {
// 	const objectCar = canvas.getContext('2d');
// 	//creamos clase coche con sus metodos
// 	class Car {
// 		constructor() {
// 			this.x = 25;
// 			this.y = 25;

// 			// Load the image
// 			const car = new Image();
// 			car.addEventListener('load', () => {
// 				// Once image loaded => draw
// 				this.car = car;
// 				this.draw();
// 			});
// 			car.src = '../images/car.png';
// 		}
// 		moveLeft() {
// 			this.x -= 25;
// 		}
// 		moveRight() {
// 			this.x += 25;
// 		}
// 		draw() {
// 			objectCar.drawImage(this.car, this.x, this.y, 50, 50);
// 			objectCar.globalCompositeOperation = 'destination-over';
// 		}
// 	}

// 	const car = new Car();

// 	document.addEventListener('keydown', (e) => {
// 		switch (e.keyCode) {
// 			case 37:
// 				car.moveLeft();
// 				break;
// 			case 39:
// 				car.moveRight();
// 				break;
// 		}
// 		updateCanvas();
// 	});

// 	function updateCanvas() {
// 		objectCar.clearRect(0, 0, anchoCanvas, alturaCanvas);
// 		car.draw();
// 		printRoad();
// 	}

// 	updateCanvas();
// }
