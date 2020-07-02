window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");

	function drawBackground() {
		let background = new Image();
		background.src = "images/road.png";
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	}

	function drawCar() {
		let car = new Image();
		car.src = "images/car.png";
		let carX = 200;
		let carY = 500;
		ctx.drawImage(car, carX, carY, canvas.width / 5, canvas.height / 4);
	}

  function drawObstacles() {
    let obtacleX = Math.floor(Math.random() * canvas.width);
    let obstacleY= 0;
    
    ctx.fillRect(obtacleX, obstacleY, 150, 30);
  }

	function startGame() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBackground();
		drawCar();
    drawObstacles();

		requestAnimationFrame(startGame);
	}

	document.addEventListener("keydown", (event) => {
		console.log(event);
		switch (event.keyCode) {
			case 37:
			case 65:
				if (carX >= 0) carX -= 10;
				break;
			case 39:
			case 83:
				if (carX <= canvas.width - canvas.width / 5) carX += 10;
				break;
			default:
				console.log("Invalid Key Press");
		}
	});
};
