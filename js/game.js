/** @type {HTMLCanvasElement} */

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.points = 0;
    }

    startGame(){
        this.intervalId = setInterval(this.update, 1000/60);
    }

    update = () =>{
        this.frames++;
        this.clear();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
        this.countPoints();
        this.drawScore();
    }

    stop(){
        clearInterval(this.intervalId);
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    updateEnemies(){
        for (let i = 0; i < this.enemies.length; i++) {     //looping through array of enemies
            this.enemies[i].y += 10;                         //updating their position
            this.enemies[i].draw();                         //draw them
        }

        //the if statement is to create the enemies
        if(this.frames % 30 === 0){             //activates each 2 seconds; 6 would be 1 second
           /*   let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            let randomColor = `rgb(${red}, ${green}, ${blue})`; */
            let randomSize = Math.floor(Math.random() * 250 - 100) + 100;              //249 max and 100 min
            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize;

            this.enemies.push(new Obstacle(randomX, 0 - 20, randomSize, 20, this.ctx))            
        }
    }

    countPoints() {
        if(this.frames % 30 === 0){
            this.points++
        }
    }

    drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "black";
        ctx.fillRect(5, 5, 70, 20)
        ctx.fillStyle = "white";
        ctx.fillText(`Score: ${this.points}`, 10, 20);
      }

    checkGameOver(){
        const crashed = this.enemies.some((enemy) => {  //evaluates all the elements of the array
            return this.player.crashWith(enemy);
        });
        if(crashed){
            this.stop();
            ctx.font = "32px Arial";
            ctx.fillStyle = "black";
            ctx.fillRect(canvas.width/2 - 125, canvas.height/2 - 75, 250, 150)
            ctx.fillStyle = "red";
            ctx.fillText(`GAME OVER!`, canvas.width/2 - 100, canvas.height/2 - 25);
            ctx.font = "20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(`You scored ${this.points} points`, canvas.width/2 - 85, canvas.height/2 + 50);
        }
    }
}