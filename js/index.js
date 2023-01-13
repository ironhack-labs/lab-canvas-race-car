const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let game = new Game();
let car = new Car();
let block = new Block();

const myBlocks = [];

function startGame() {
	car.drawCar();
	car.keyControls();
	block.draw();

	setInterval(() => {
		update();
		myBlocks.forEach((block) => {
			block.draw();
			block.update();
		});
	}, 1000 / 60);

	setInterval(() => {
		block.add();
	}, 2000);
}

const update = () => {
	game.clear();
	car.clear();
	car.drawCar();
};

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
};
