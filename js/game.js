/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null; 
        this.frames = 0;
        this.enemies = []

    }
    
    start(){ 
        this.intervalId = setInterval(this.update, 1000 / 60)
    }
    update = () => { 
        this.frames++;
        this.clear(); 
        this.player.draw();
        this.player.newPos();
        this.updateEnemies();
        this.checkGameOver();
        
        
    }
    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    stop(){
        clearInterval(this.intervalId);
    }

    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 2
            this.enemies[i].draw()
        }
        if(this.frames % 120 === 0){
            let randomSize = Math.floor(Math.random() * 90 - 10) + 10;
            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize 
            this.enemies.push(new Enemy (randomX, 0, randomSize * 50, 50, "red", this.ctx))
        }
}
checkGameOver() {
    const crashed = this.enemies.some((enemy) =>{ 
        return this.player.crashWith(enemy);
    }) 
    if(crashed){
        this.stop();
        this.ctx.fillText("Game Over", canvas.width /2 - 25, canvas.height/2)
    }
}
}











