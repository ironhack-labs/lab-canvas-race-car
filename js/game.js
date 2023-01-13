class Game {
	constructor() {
		// this.road = new Road();
		this.isGameOver = false;
		this.score = 0
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




	over() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = '30px Arial';
		ctx.fontWeight = 'bold';
		ctx.fillStyle = 'red';
		ctx.fillText('Game Over', 180, 300);
		ctx.fillText('Score: ' + score, 180, 350);
	}


	stop() {
		this.isGameOver = true;
		game.over()

		myBlocks = [];
		console.log('Game Over');

	}

	checkCollisions() {
		myBlocks.forEach((block) => {
			if (block.isCrashed(car)) {
				this.stop();
			}
		});
	}


}
