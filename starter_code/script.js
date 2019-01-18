window.onload = function() {
  var img = new Image();

  img.src = "/starter_code/images/car.png";
  document.getElementById("start-button").onclick = function() {
    setTimeout(function() {
      var canvas = document.querySelector("canvas");
      var game = new Game(canvas, img);
      game.obstacles.push(new Obstacle(canvas));
      game.drawBoard();
      game.drawPlayer(img);
      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 37:
            game.moveLeft();
            game.clear();
            game.drawBoard();
            game.drawPlayer();
            for (var i = 0; i < game.obstacles.length; i++) {
              game.obstacles[i].drawObstacle();
            }

            break;
          case 39:
            game.moveRight();
            game.clear();
            game.drawBoard();
            game.drawPlayer();
            for (var i = 0; i < game.obstacles.length; i++) {
              game.obstacles[i].drawObstacle();
            }
            break;
        }
      };
      setInterval(function() {
        game.obstacles.push(new Obstacle(canvas));
      }, 3000);
      setInterval(function(){if(game.checkCollision())
        
        clearInterval(stop)},50)
     var stop= setInterval(function() {
        
        game.addPoints()
        if (game.obstacles.length > 0) game.clear();
        game.drawBoard();
        game.drawPlayer();
        for (var i = 0; i < game.obstacles.length; i++) {
          game.obstacles[i].updateObstacle();
          game.obstacles[i].drawObstacle();
        }
      }, 50);
    }, 500);
  };
};
class Game {
  constructor(canvas, img) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.position = this.width / 2;
    this.positionY =  this.height - 90
    this.img = img;
    this.obstacles = [];
    this.score = 0
  }

  drawBoard() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 30, this.height);
    this.ctx.fillRect(this.width - 30, 0, 30, this.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(40, 0, 10, this.height);
    this.ctx.fillRect(this.width - 50, 0, 10, this.height);
    for (var i = 35; i < this.height; i += 50) {
      this.ctx.fillRect(this.width / 2 - 3, i, 6, 25);
    }
    this.ctx.fillStyle = "white";
          this.ctx.font = "20px serif";
          this.ctx.fillText('SCORE='+this.score, 50, 50);
  }
  moveLeft() {
    this.position -= 14;
  }
  moveRight() {
    this.position += 14;
  }

  drawPlayer() {
    this.ctx.drawImage(this.img, this.position, this.height - 90, 30, 60);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  addPoints(){
    if(this.obstacles.length>0){
      for(var i=0; i<this.obstacles.length;i++){
        if(this.obstacles[i].positionY===this.height - 30){
          this.score+=50
          // this.obstacles.shift()
          console.log("score", this.score)
          this.ctx.fillStyle = "grey";
          this.ctx.fillRect(10,50,100,100);
          
        }
      }
    }
    
    
  }
  checkCollision(){
    for(var i=0; i<this.obstacles.length;i++){
    if(this.obstacles[i].positionY+35>this.height-90&&this.obstacles[i].positionX<this.position+30 && this.obstacles[i].positionX+this.obstacles[i].obstacleWidth>this.position ){
      this.ctx.fillStyle = "red";
          this.ctx.font = "30px serif";
          this.ctx.fillText('GAME OVER', 150, 300); 
          this.ctx.fillText('SCORE: '+this.score, 150, 350); 
      return true
    }return false
    }
    
  }
  
}

class Obstacle {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.obstacleWidth = Math.floor(Math.random() *  120) + 70;
    this.positionX = Math.floor(Math.random() * (this.width -130)) + 50;
    this.positionY = 0;
  }
  updateObstacle() {
    this.positionY += 6;
  }
  drawObstacle() {
    
    this.ctx.fillStyle = "purple";
    this.ctx.fillRect(this.positionX, this.positionY, this.obstacleWidth, 35);
  }
}
