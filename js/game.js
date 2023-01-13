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




	over() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'black';
		ctx.fillRect(0, 175, canvas.width, canvas.height /2);
		ctx.font = '30px Arial';
		ctx.fontWeight = 'bold';
		ctx.fillStyle = 'red';
		ctx.fillText('Game Over', 180, 300);
		ctx.fillText(`Your final score:`, 140, 350);
		ctx.fillText(`${score}`, 250, 400);
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
