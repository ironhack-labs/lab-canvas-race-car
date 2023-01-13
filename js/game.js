const roadArea = {
	canvas: document.getElementById('canvas'),
	startGame: function () {
		this.context = this.canvas.getContext('2d');
		this.background = new Image();
		this.background.src = 'images/road.png';
		this.interval = setInterval(updateRoadArea, 20);
	},
	clear: function () {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
};

class Car {
	constructor() {
		this.width = 50;
		this.height = 100;
		this.x = 0;
		this.y = canvas.width - this.height;
		this.image = new Image();
		this.image.src = 'images/car.png';
	}

	update() {
		const ctx = roadArea.context;

		this.image.onload = () => {
			ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		};
	}
}

updateRoadArea = () => {
	roadArea.clear();
	roadArea.context.drawImage(roadArea.background, 0, 0, roadArea.canvas.width, roadArea.canvas.height);
	car.update();
};

const car = new Car();

window.onload = () => {
	document.getElementById('start-button').onclick = () => {
		roadArea.startGame();
	};
};
