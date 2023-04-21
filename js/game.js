class Game{
    constructor(ctx, width, height, player){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null; 
    this.frames = 0; 
    this.enemies = [];


    }

    start(){ 
        this.intervalId = setInterval(this.update, 1000); 
    }

    update = () => { 
        this.frames++
        this.clear();
        this.player.newPosition();
        this.player.draw();
        this.updateEnemies(); 
    }

    stop(){ 
    clearInterval(this.intervalId);
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    updateEnemies(){
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].y += 3;
            this.enemies[i].draw(); 
        }


        if(this.frames % 200 === 0){

          let randomSize = Math.floor(Math.random() * 100 - 10) + 10;
          let randomX = Math.floor(Math.random() * this.width - randomSize) + randomSize;

          this.enemies.push(new Enemy (randomX, 0, randomSize, randomSize, "image", this.ctx)
          );
        }
    }
}