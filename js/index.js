const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
let game = new Game();
let car = new Car();
let block = new Block();
let updateInterval;
let count = 0;
let score = 0;
const restartButton = document.getElementById('restart');
// const scoreBoard = document.createElement('div');
// const gameIntro = document.querySelector('.game-intro');
// scoreBoard.innerHTML = score;
// scoreBoard.style.fontSize = '30px';
// scoreBoard.style.fontWeight = 'bold';
// scoreBoard.style.color = 'red';
// scoreBoard.style.padding = '10px';
// scoreBoard.style.margin = '10px';
// gameIntro.appendChild(scoreBoard);

let myBlocks = [];

function startGame() {
	startButton.style.display = 'none';
	car.drawCar();
	car.keyControls();
	block.draw();

	updateInterval = setInterval(() => {
		update();
		console.log(myBlocks);
		count++;

		if (count % 20 === 0) {
			score++;
		}
		if (count % 120 === 0) {
			block.add();
		}
	}, 1000 / 90);
}

function update() {
	if (!game.isGameOver) {
		game.clear();
		car.clear();
		car.drawCar();
		myBlocks.forEach((block) => {
			block.draw();
			block.update();
		});

		game.checkCollisions();
	} else {
		clearInterval(updateInterval);
		game.stop();
		restartButton.style.display = 'block';
	}
}

function restart() {
	game.clear();
	car.clear();
	myBlocks = [];
	score = 0;
	game = new Game();
	car = new Car();
	block = new Block();
	updateInterval;
	count = 0;
	score = 0;
	startGame();
	restartButton.style.display = ' none';
}

window.onload = () => {
	startButton.onclick = () => {
		startGame();
	};
};
