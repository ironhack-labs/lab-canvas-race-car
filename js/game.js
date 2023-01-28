/** @type {HTMLCanvasElement} */


class Game{
  constructor(ctx, width, height, player){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null; //We don't declare an amount here, because we don't want the game to automatically start.
      this.frames = 0; // can be used to increase score, if 60 frames pass it's 1 minute.
      this.enemies = [];
      this.backgroundImage = new Image ();

  }

  start(){
      this.intervalId = setInterval(this.update, 1000/60);
  }

  //update needds to be an arrow function because "this" needs to refer to the class
  //and not the update method itself.

  update = () => {
      //Game logic here
      this.clear();
      this.player.newPos(); // Step 30
      this.player.draw();
      this.frames++;
      this.updateEnemies();
      this.checkGameOver();

  }

  stop(){
      clearInterval(this.intervalId); // for the Game Over.
  }

  clear(){
      this.backgroundImage.src = "../images/road.png";
      this.ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
  }

  updateObstacles(){
      for(let i = 0; i < this.enemies.length; i++ ){
          this.enemies[i].y += 1;
          this.enemies[i].draw();
      }
      
      //the if statement is to create the enemies
      //which we only want to do every 120 frames(2 seconds)

      
      if(this.frames % 120 === 0){
          let randomSize = Math.floor(Math.random() * 150 - 10) + 10; // this is to have random squares as enemeies // the tens mean that we always have a value between 10 and 150, no less.

          let randomX = Math.floor(Math.random() * this.height - randomSize) + randomSize; // the minus at the end makes it so that the squares are always on screen
          
          this.enemies.push(
              new Component(new Enemy(randomX, 0, randomSize, 30, "orange", this.ctx)) //x, y, w, h, color, ctx
              );     

    }
  }

  checkGameOver(){
      const crashed = this.enemies.some((enemy) => {
          return this.player.crashWith(enemy);
      });
      if(crashed){
          this.stop();
      }
  }

}