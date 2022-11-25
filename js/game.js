class Game {
    constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.bg = new Background(this.ctx);
        this.player = new Player(this.ctx, this.canvas.width -330, this.canvas.height -170, 150, 170);
        this.intervalId = null;
        this.obs = []
        this.tick = 0;
        this.scoreboard = 0;
      
    }

    start (){
        this.intervalId = setInterval(()=>{
            this.draw ();
            this.score();
            this.move();
            this.checkCollisions();
           this.tick++;
            if (this.tick % 60 === 0){
                this.addObs();
                this.scoreboard++;
            }
        }, 1000 / 60)
        
    }
    
    draw (){
        this.bg.draw();
        this.player.draw();
        this.obs.forEach((obs)=>{
             obs.draw(); 
        });
    }

    move (){
        this.bg.move();
        this.player.move();
        this.obs.forEach((obs) => {
		    obs.move();
		});
    }

    addObs() {
		//const obsWidth = 140;
		const yPos = -100;
		const xPos = Math.random() * (this.canvas.width - 140);
		this.obs.push(new Obstacle(this.ctx, xPos, yPos));
	}

	checkCollisions() {
		if (this.obs.some(obstacle => this.player.isColliding(obstacle))) {
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
		this.ctx.fillText(`Game Over Score: `+ `${this.scoreboard}`, this.canvas.width / 2, this.canvas.height / 2);
	}

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		//this.obs = this.obs.filter(obstacle => obstacle.y < this.canvas.height);
	}

    score(){
        this.ctx.font = "bold 40px Sans Serif";
        this.ctx.fillStyle = "#750C09";    
        this.ctx.fillText ("Score: " + `${this.scoreboard}`, 80, 100);

    }

    

}
   
