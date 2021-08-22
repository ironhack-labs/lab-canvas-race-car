window.onload = () => {
	//We create the canvas and its context
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	let frameId = null;
	let obstaclesId = null;

	//We create instances of the classes we want to paint in the canvas
	//using the information we decided on their constructors
	const background = new Background(ctx);
	const car = new Car(ctx, canvas.width / 2 - 25, canvas.height - 110);

	//create an array to store obstacles
	const obstaclesArray = [];

	const score = {
		points: 0,
		draw: function () {
			ctx.font = '30px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Score: ' + this.points, 200, 50);
		}
	};

	//create an interval to keep adding obstacles to the array
	obstaclesId = setInterval(function () {
		let obstacle = new Obstacle(
			ctx, //canvas context
			Math.random() * canvas.width - 200, //position X
			0, //position Y
			Math.random() * 50 + 100, //width
			Math.random() * 15 + 10, //height
			Math.ceil(Math.random() * 3) //speed
		);

		score.points += 10;

		obstaclesArray.push(obstacle);
	}, 2000);

	function checkCollisions(car, obstacle) {
		let crash =
			car.x < obstacle.x + obstacle.width && //check the right side of the car
			car.x + car.width > obstacle.x &&
			car.y < obstacle.y + obstacle.height &&
			car.y + car.height > obstacle.y;

		if (crash) {
			cancelAnimationFrame(frameId);
			clearInterval(obstaclesId);
			alert('Crashed! Game over');
			window.location.reload();
		}
	}

	function updateScore() {
		numObstaclesTotal = obstaclesArray.length;

		obstaclesArray = obstaclesArray.filter((eachObstacle) => {
			eachObstacle.y < canvas.height;
		});

		numObstaclesOnScreen = obstaclesArray.length;

		score.points += numObstaclesTotal - numObstaclesOnScreen;
	}

	//This is where the game logic happens
	function gameLoop() {
		//0- Create a loop to animate the game
		frameId = requestAnimationFrame(gameLoop);

		//Check if the game is working with a console log
		console.log('Game Started');

		//1- Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//2- paint the objects
		background.draw();
		car.draw();
		score.draw();

		//3- Loop through the array and print and move every obstacle
		obstaclesArray.forEach((eachObstacle) => {
			eachObstacle.draw();
			eachObstacle.move();
			checkCollisions(car, eachObstacle);
		});

		//4 - Remove obstacles that are outside of the screen and update score
		updateScore();
	}

	//Start the game when we click on the start button
	document.getElementById('start-button').onclick = () => {
		gameLoop();
	};

	//Add an event listener to move the car with the arrow keys
	//Keyboard events checker => https://keycode.info/

	window.addEventListener('keydown', moveCar);

	function moveCar(event) {
		switch (event.keyCode) {
			case 37:
				if (car.x > 0) car.x -= 15;
				break;

			case 39:
				if (car.x < canvas.width - car.width) car.x += 15;
				break;

			default:
				break;
		}
	}
};