class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];

        // Background Image
        const background = new Image();
        background.addEventListener("load", () => {
        this.background = background;});
        background.src = "../images/road.png";
    }

    drawBackground(){
        ctx.drawImage(this.background, 0, 0, this.width, this.height); //function for drawing Background
    }

    start(){
        this.intervalId = setInterval(this.update,10) //sets the clock speed of the game running at 100fps (1000ms / 10ms)
    }

    update = () => {    
        this.frames++;                                // Counts the frames since the game started
        this.clear();                                 // Clears previous Frame
        this.drawBackground();                        // Draws Background
        this.player.moveLimiter();                    // limits the Player Position
        this.player.draw();                           // Draws Player on new Position
        this.updateEnemies();                         // Updates Enemy position
        this.checkGameOver();                         // Checks for GameOver events
    }

    stop(){
        clearInterval(this.intervalId); //clears Interval aka: stops game
    }

    clear(){
        this.ctx.clearRect(0,0, this.width, this.height); // Clears previous Frame
    }
    
    updateEnemies(){
        for (let i = 0; i < this.enemies.length; i++){   // for that creates enemies
            this.enemies[i].y += 1;                      // Makes the obstacles go against you (y goes up)
            this.enemies[i].draw();                      // continue to Draw Enemy 
        }
        if (this.frames % 200 === 0){                    // randomizes the obstacle sizes
            let y = -50;
            let minWidth = 0;
            let maxWidth = 300;

            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);

            let minGap = 0;
            let maxGap = 50;

            let gap = Math.floor(Math.random() * (maxGap-minGap+1)+minGap);
            let x = Math.floor(Math.random() * (this.width - width - gap));
            
            this.enemies.push(new Enemies(x, y, x + width + gap, 50, "red", this.ctx)); // Creates instances of the Enemies class
        }
    }

    checkGameOver(){
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        })
        if (crashed){
            this.stop();
            ctx.fillStyle = "red";
            this.ctx.font = "72px Arial";
            this.ctx.fillText("Game Over", 0, this.height/2);

        }
    }
}