/** @type{HTMLCanvasElement} */


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
        this.intervalId = setInterval(this.update, 1000/60); 
    }
    
    update = () => { 
        this.frames++
        this.clear();
        this.player.newPosition();
        this.player.draw();
        this.updateEnemies(); 
        this.Score();
        this.checkGameOver();
        this.gameOver(message);
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
      Score(){
         ctx.font = "25px Arial";;
         ctx.fillStyle = 'white';
         ctx.fillText(`Score: ${Math.floor(this.frames / 40)} `, canvas.width / 7, 50)
         ctx.lineWidth = 1;
         ctx.strokeStyle = 'black';
         ctx.strokeText('Score: ', 700, 150)

      }
    
      checkGameOver(){
        const crashed = this.enemies.some((enemy) => {
            return this.player.crashWith(enemy); 
        });
    
        if (crashed) {
            this.stop();

            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, canvas.width, 200);
            this.ctx.font = '46px, sans-serif';
            this.ctx.fillStyle = 'red';
            this.ctx.fillText(`Game Over!`, 50, 50)
            this.ctx.lineWidth = 1;
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(`Your final score`, 80, 100);
            this.ctx.lineWidth = 1;
            this.ctx.fillStyle = 'white';
            this.ctx.lineWidth = 1;
            this.ctx.fillText(`${Math.floor(this.frames / 30)}`, 220, 150);
           
        }
      };
/*
      gameOver(message) {
        const gameOverBox = document.getElementById("game-over");

        gameOverBox.style.display = "block";
        gameOverBox.innerHTML = message;

        beginGameButton.style.display = "block";
        beginGameButton.textContent = "Restart";
    }*/
 }
    