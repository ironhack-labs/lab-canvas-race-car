const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let game = new Game();
let car = new Car();
let block = new Block();
let updateInterval;
let blockInterval;
let count = 0;
let score = 0;
// const scoreBoard = document.createElement('div');
// const gameIntro = document.querySelector('.game-intro');
// scoreBoard.innerHTML = score;
// scoreBoard.style.fontSize = '30px';
// scoreBoard.style.fontWeight = 'bold';
// scoreBoard.style.color = 'red';
// scoreBoard.style.padding = '10px';
// scoreBoard.style.margin = '10px';
// gameIntro.appendChild(scoreBoard);

const myBlocks = [];

function startGame() {
	car.drawCar();
	car.keyControls();
	block.draw();

	updateInterval = setInterval(() => {
		update();
		count++;

		if (count % 10 === 0) {
			score++;
		}
		if (count % 100 === 0) {
			block.add();
		}
	}, 1000 / 60);
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
	}
}

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
};
