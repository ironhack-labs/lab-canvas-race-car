
const roadImage = new Image();
roadImage.src ='./images/road.png'

const playerImage = new Image();
playerImage.src = './images/car.png'

let scoreCounter = document.getElementById('score-counter');

class RoadObstacles {
  constructor(ctx){
    this.ctx = ctx
    this.width = Math.floor((Math.random() * 100)) + 10;
    this.height = 30;
    this.x = Math.floor(Math.random() * (500 - this.width +1));
    this.y = -30; 
  }

  move(){
    this.y += 4
  }

  draw(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  leftEdge(){
    return this.x;
  }

  rightEdge(){
    return this.x + this.width;
  }

  topEdge(){
    return this.y;
  }

  bottomEdge(){
    return this.y + this.height;
  }  
};

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let numFrames = 0
    let score = 0

    const playerObject = {
      img: playerImage,
      x: 250,
      y: 550,
      height: 115,
      width: 57,

      moveRight: function(){
        this.x += 10
      },

      moveLeft: function(){
        this.x -= 10
      },

      draw: function(){
        if(this.x > 500 ? this.x = 500 : this.x);
        if(this.y > 700 ? this.y = 700 : this.y);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      },

      playerLeftEdge() {
        return this.x;
      },

      playerRightEdge() {
        return this.x + this.width;
      },

      playerTopEdge(){
        return this.y;
      },

      playerBottomEdge(){
        return this.y + this.height;
      },

      collision(roadObstacle){
        return !(this.playerBottomEdge() < roadObstacle.topEdge() || this.playerTopEdge() > roadObstacle.bottomEdge() || this.playerRightEdge() < roadObstacle.leftEdge() || this.playerLeftEdge() > roadObstacle.rightEdge());
      }
    }

    const roadObstaclesArray = [];

    function gameLoop() {

      if(numFrames % 100 === 0) {
        roadObstaclesArray.push(new RoadObstacles(ctx));
      }

      numFrames += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(roadImage, 0, 0, 500, 800 );
                              
      for(let i = 0; i < roadObstaclesArray.length; i ++) {
        roadObstaclesArray[i].move();
        roadObstaclesArray[i].draw();
      }

      for(let i = 0; i < roadObstaclesArray.length; i++) {
        if(playerObject.collision(roadObstaclesArray[i])) {
          return;
        }
      }

      playerObject.draw();

      if(numFrames % 50 === 0) {
        score += 25
        printScore();
      }

      window.requestAnimationFrame(gameLoop); 
    };

    function printScore() {
      scoreCounter.innerText = score
    }

    window.addEventListener('keydown', event => {
      switch (event.key){
        case 'ArrowRight':
          playerObject.moveRight();
          break;
        case 'ArrowLeft':
          playerObject.moveLeft();
          break;
      };
    });

    gameLoop();

  };
};


