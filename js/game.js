/** @type {HTMLCanvasElement} */

class Game{
    constructor(ctx, width, height, player){
        this.ctx = ctx
        this.width = width
        this.height = height
        this.player = player
        this.intervalId = null
        this.frames = 0
        this.enemies = []
    }

    start(){
        this.intervalId = setInterval(this.upDate, 1000/60) 
    }

     upDate = () => {
        this.frames++
        this.clear()
        this.player.newPosition()
        this.player.draw()
        this.updateEnemies()
        this.checkGameOver()
    }

    stop(){
        clearInterval(this.intervalId)
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 4
            this.enemies[i].draw()
        }

        if(this.frames % 60 === 0){
            let randomSize = Math.floor(Math.random() * 150 - 20) + 20
            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize
            this.enemies.push(new Enemy(randomX, 0, randomSize, randomSize, 'green',this.ctx));
        }
    }

    checkGameOver(){
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy)
        })
        
        if(crashed) {
            this.stop()

            function drawSquare(x, y, w, h, color) {
                //before drawing the square, update the color
                ctx.fillStyle = color;
                ctx.fillRect(x, y, w, h);
        }
        
        drawSquare(0, 0, canvas.width, canvas.height, 'black');
        ctx.font = "40px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Game Over!", canvas.width/2, canvas.height/2);
        
    }
}
}