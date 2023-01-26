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
            this.enemies[i].y += 3
            this.enemies[i].draw()
        }

        if(this.frames % 120 === 0){
            let randomSize = Math.floor(Math.random() * 150 - 40) + 40
            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize
            this.enemies.push(new Enemy(randomX, 0, randomSize, randomSize, this.ctx))
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
        ctx.font = "80px";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
        }
    }

}