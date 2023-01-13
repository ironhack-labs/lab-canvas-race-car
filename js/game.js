class Game {
	constructor() {
		// this.road = new Road();
		this.isGameOver = false;
	}

	drawRoad() {
		let road = new Image();
		road.src = 'images/road.png';
		this.road = road;
		this.road.onload = () => {
			ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
		};
	}

	clear() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	//add controls for the car
}
