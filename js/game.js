class Game {

    constructor(ctx){
        this.ctx = ctx;
        this.background = new Background (this.ctx);
        this.player = new Player (this.ctx);
        this.obstacle = [];
        this.intervalId = null;
        this.tickObstacle = 0;
    }

    
    start () {
        this.intervalId = setInterval(() => {
            
            this.clear();
            this.draw();
            this.checkCollisions();
            this.move();  
            this.tickObstacle++;

            if (this.tickObstacle % 100 === 0) {
            this.addObstacle()};

        }, 1000 / 60);    
    }

    clear (){
        this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height)        
    }

    draw () {
        this.background.draw();
        this.player.draw();
        this.obstacle.forEach(obs => obs.draw());
    }
  
    move () {
        this.background.move();
        this.player.move();
        this.obstacle.forEach(obs => obs.move());
    }

    addObstacle() {
        this.obstacle.push(new Obstacle (this.ctx))
    }

    endGame() {
        clearInterval(this.intervalId);
        this.intervalId = null;

        this.ctx.beginPath();
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.closePath();
    }

    gameOverText() {    
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText('Game Over!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);


        const scoreText = 
        `Your final score
        ${this.tickObstacle}
        `
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(scoreText, this.ctx.canvas.width / 1.8, this.ctx.canvas.height / 1.8);
    }


    checkCollisions() {
        let playerVsObs = this.obstacle.find(obs => obs.collide(this.player))
        let accPoint = 0
        
        if (playerVsObs)  {        
            this.endGame();
            this.gameOverText()
            }  
            else {
                accPoint++;
                const scoreParr = document.getElementsByClassName('scoreText');
                scoreParr.textContent = accPoint;
        }
    }
}