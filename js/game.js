class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
        this.bg = new Background(this.ctx);
        this.player = new Player (this.ctx, this.canvas.width / 2 - 20, this.canvas.height - 100);
        this.intervalId = null;
        this.obstacles = [];
        this.tick = 0;
        this.scoreboard = 0;
	}

    start () {
        this.intervalId = setInterval (() => {
            this.clear();
            this.draw();
            this.move();
            this.tick++;
			if (this.tick % 60 === 0) {
				this.addObs ();
                this.scoreboard++;
			}
            this.checkCrashes();
        }, 1000 / 60);
    }

    draw () {
        this.bg.draw();
        this.player.draw();
        this.obstacles.forEach(obstacle => {
			obstacle.draw();
		});
    }

    move () {
       
        this.bg.move();
        this.player.move();
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
		if (this.obstacles.some(obstacle => this.player.isCrashing(obstacle))) {
			this.gameOver();
		}
	}

    gameOver() {
		clearInterval(this.intervalId);
        this.ctx.fillStyle = "rgba(0, 0, 0)";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "rgb(255, 255, 255)";
		this.ctx.font = "40px Arial";
		this.ctx.textAlign = "center";
		this.ctx.fillText("Game Over", this.canvas.width / 2, this.canvas.height / 2);
	}


    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.canvas.height);
	}

    score(){
        this.ctx.font = "bold 40px Sans Serif";
        this.ctx.fillStyle = "#750C09";    
        this.ctx.fillText ("Score: " + `${this.scoreboard}`, 80, 100);
    }

}