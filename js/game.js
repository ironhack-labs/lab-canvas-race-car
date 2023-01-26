/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.score = 0;
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.player.newPosition();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
        this.draw();
        this.updateScore();
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    draw(){
        ctx.font = '35px sens-serif';
        ctx.fillStyle = 'black';
        ctx.fillText('Score:',30, 50);
        ctx.fillText(this.score,130, 51);
    }

    updateScore() {
           if(this.frames % 10 === 0) {
            this.score++;
           }
    }


    updateEnemies() {

        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 5;
            this.enemies[i].draw();
        }

        if(this.frames % 200 === 0) {
            let randomSize = Math.floor(Math.random() * 90 - 10) + 10;

            let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize;

            this.enemies.push(new Enemy(randomX, 0, randomSize * 3, 50, 'green', this.ctx));
        }
    }

    checkGameOver() {
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        });

        if(crashed) {
            ctx.font = '50px arial';
            ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, 900, 700);
            ctx.fillStyle = 'red';
            ctx.fillText('GAME OVER!',100, 350)
            ctx.font = '60px arial';
            ctx.fillStyle = 'white';
            ctx.fillText('Your final score:', 40, 450);
            if(this.score > 0 && this.score < 100) {
                ctx.fillText(this.score,220, 530);
            } else if(this.score >= 100 || this.score < 1000){
                ctx.fillText(this.score,195, 530);
            }else{
                ctx.fillText(this.score,140, 530);
            }
            ctx.lineWidth = 2
            this.stop();
        }
    }

}