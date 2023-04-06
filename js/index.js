const canvas = document.querySelector("canvas");
canvas.style.display = "none";
const ctx = canvas.getContext("2d");
const gameIntro = document.querySelector(".game-intro");

const roadImg = new Image();
const carImg = new Image();
roadImg.src = "../images/road.png";
carImg.src = "../images/car.png";

//game params setting
let carX;
const carY = canvas.height * 0.8;
const carSpeed = 7;

carImg.decode().then(() => {
	const carRatio = carImg.height / carImg.width;
	carImg.width = canvas.width * 0.1;
	carImg.height = carImg.width * carRatio;
	carX = (canvas.width - carImg.width) / 2;
});

let isMovingLeft = false;
let isMovingRight = false;

let obstaclesNum = 5;
const obstaclesSpeed = 1.5;
const obstaclesThickness = 12;
const obstacles = [];

let readyToScore = true;
let score = 0;
let gameOver = false;
let animateId;

window.onload = () => {
	document.getElementById("start-button").onclick = () => {
		startGame();
	};

	document.addEventListener("keydown", (event) => {
		if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft")
			isMovingLeft = true;
		if (event.key === "d" || event.key === "D" || event.key === "ArrowRight")
			isMovingRight = true;
	});

	document.addEventListener("keyup", (event) => {
		if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft")
			isMovingLeft = false;
		if (event.key === "d" || event.key === "D" || event.key === "ArrowRight")
			isMovingRight = false;
	});
};

const generateX = () => Math.random() * 0.5 * canvas.width;

function startGame() {
	gameIntro.style.display = "none";
	canvas.style.display = "block";

	for (let i = 0; i < obstaclesNum; i++) {
		obstacles[i] = {
			xPos: generateX(),
			width: generateX(),
			yPos:
				(canvas.height / (obstaclesNum - 1)) * i -
				canvas.height -
				obstaclesThickness,
			height: obstaclesThickness,
		};
	}

	animate();
}

const drawCar = () => {
	ctx.drawImage(carImg, carX, carY, carImg.width, carImg.height);
};

const drawObstacles = () => {
	ctx.beginPath();
	ctx.fillStyle = "darkred";
	obstacles.forEach((obstacle) => {
		// xPos, yPos, width, height
		ctx.rect(obstacle.xPos, obstacle.yPos, obstacle.width, obstacle.height);
	});
	ctx.fill();
	ctx.closePath();
};

const gameOverText = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.style.backgroundColor = "black";
	ctx.textAlign = "center";
	ctx.font = "bold 50px sans-serif";
	ctx.fillStyle = "darkred";
	ctx.fillText(`Game Over!`, canvas.width / 2, canvas.height / 2 - 70);
	ctx.fillStyle = "white";
	ctx.fillText(`Your final score`, canvas.width / 2, canvas.height / 2);
	ctx.fillText(score, canvas.width / 2, canvas.height / 2 + 70);
};

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
	drawCar();
	drawObstacles();

	if (isMovingLeft && carX > 50) carX -= carSpeed;
	if (isMovingRight && carX < canvas.width - carImg.width - 50)
		carX += carSpeed;

	obstacles.forEach((obstacle) => {
		obstacle.yPos += obstaclesSpeed;
		if (obstacle.yPos >= canvas.height) {
			obstacle.yPos = -canvas.height / (obstaclesNum - 1);
			obstacle.xPos = generateX();
			obstacle.width = generateX();
			readyToScore = true;
		}

		if (
			obstacle.yPos + obstacle.height > carY &&
			obstacle.yPos < carY + carImg.height
		) {
			if (
				carX < obstacle.xPos + obstacle.width &&
				carX + carImg.width > obstacle.xPos
			)
				gameOver = true;
		}

		if (readyToScore) {
			if (obstacle.yPos > carY + carImg.height) {
				score += 1;
				readyToScore = false;
				console.log(score);
			}
		}

		ctx.font = "24px sans-serif";
		ctx.fillStyle = "white";
		ctx.fillText(`Score: ${score}`, 70, 30);
	});

	if (gameOver) {
		console.log("game over!!!");
		cancelAnimationFrame(animateId);
		gameOverText();
	} else {
		animateId = requestAnimationFrame(animate);
	}
};
