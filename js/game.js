class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
        this.intervalId = null;
        this.bg = new Background(this.ctx);
        this.car = new Car(this.ctx, this.canvas.width / 2 - 27, this.canvas.height - 120);
        this.obstacles = [];
        this.tick = 0;
        this.score = 0;
        this.count = 0;
	}

    start () {
        this.intervalId = setInterval (() => {
            this.clear();
            this.draw();
            this.move(); 
            this.tick++;
			if (this.tick % 60 === 0) {
				this.addObs ();
			};
            this.count++;
            if(this.count % 60 === 0) {
                this.score++
            };
            this.checkCrashes();
            this.drawScore();
        }, 1000 / 60);
    }

    draw () {
        this.bg.draw();
        this.car.draw();
        this.obstacles.forEach(obstacle => {
			obstacle.draw();
		});
    }

    move () {
        this.bg.move();
        this.car.move();
        this.obstacles.forEach(obstacle => {
			obstacle.move();
		});
    }

    addObs () {
        const randomWidth = Math.random() * (100) + 75;
        const randomX = Math.random() * ((this.canvas.width / 2 + randomWidth) - 50) + 50;

        const obstacle = new Obstacle(this.ctx, randomX, -35, randomWidth, 35);
		this.obstacles.push(obstacle);        
    }

    checkCrashes() {
		if (this.obstacles.some(obstacle => this.car.isCrashing(obstacle))) {
			this.gameOver();
		}
	}

    drawScore() {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "25px Arial";
        this.ctx.fillText("Score: " + this.score, 75, 30);
    }

    gameOver() {
		clearInterval(this.intervalId);
        this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "#870107";
		this.ctx.font = "50px Arial";
		this.ctx.textAlign = "center";
		this.ctx.fillText("Game Over!", this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillStyle = "white";
		this.ctx.font = "35px Arial";
		this.ctx.textAlign = "center";
        this.ctx.fillText("Your Final Score", this.canvas.width / 2, this.canvas.height / 2 + 50);
        this.ctx.fillText(this.score, this.canvas.width / 2, this.canvas.height / 2 + 100);
        
	}

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.canvas.height);
	}
}