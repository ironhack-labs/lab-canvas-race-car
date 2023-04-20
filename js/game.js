class Game {
    constructor(ctx, width, height, player){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = []
        //road image
        const roadImg = new Image();
        roadImg.src = "../images/road.png";
        this.img= roadImg;
    }

    start(){
        this.intervalId = setInterval(this.update, 10)
    }

    update = () => {
        this.frames++;
        this.drawRoad();
        this.player.newPos();
        this.player.draw();
        this.updateEnemies();
        this.checkGameOver();
    }

    //Stops game
    stop(){
        clearInterval(this.intervalId);
    }

    //Clears Canvas
    drawRoad(){
        this.ctx.drawImage(this.img, 0, 0, 500, 700);
    }

    //Update Enemies
    updateEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].y += 1;
            this.enemies[i].draw();
        }
    
        if (this.frames % 200 === 0) {
            let y = -100;
            let minWidth = 50;
            let maxWidth = 100;
    
            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    
            let x = Math.floor(Math.random() * (this.width - width));
    
            this.enemies.push(new Component(x, y, width, 50, 'red', this.ctx));
        }
    }
    

    checkGameOver(){
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy);
        });

        if(crashed){
            this.stop();
            this.fillStyle = 'red';
            this.ctx.font = '72px Arial';
            this.ctx.fillText('Game Over', 0, this.height/2);
        }
    }
}
