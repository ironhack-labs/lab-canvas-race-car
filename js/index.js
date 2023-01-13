const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let game = new Game();
let car = new Car();

function startGame() {
	// game.drawRoad();
	car.drawCar();
	car.keyControls();
	setInterval(() => {
		update();
	}, 1000 / 60);
}

const update = () => {
	game.clear();
	car.clear();
	// game.drawRoad();
	car.drawCar();
};

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		startGame();
	};
};
