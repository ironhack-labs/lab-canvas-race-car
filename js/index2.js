//..........Code Along..............//
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
      startGame();
  };

  //................Keyboard.............................
  document.addEventListener("keydown", (e) => {
      switch(e.key) {
        case "ArrowLeft":
          player.moveLeft();
          break;
        case "ArrowRight":
          player.moveRight();
          break;
      }
  });
//...................Start...................................
  function startGame() {
    updateCanvas();
  }

  const scoreElement = document.getElementById("score");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  let animationId = null;
  const marginLeft = 60;
  const marginRight = canvas.width - marginLeft;
  let frames = 0;
  let score = 0;

  //................Update Canvas..........................
  function updateCanvas() {
    frames += 1;
    showScore();
    clearCanvas();
    background.draw();
    player.draw();
    const crash = updateObstacles();
    if(!crash){
      animationId = requestAnimationFrame(updateCanvas);
    }else{
      stopGame();
      gameOver();
    }   
  }

  //...............Clear Canvas.............................
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  //.................Stop Game...............................
  function stopGame() {
    cancelAnimationFrame(animationId);
  }
  //.................Show Score..............................
  function showScore() {
    scoreElement.innerHTML = score;
  }
  //...................Game Over.............................
  function gameOver() {
    clearCanvas();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillText('Game Over', 210, 300);
  }
  //...............Background Class..........................
  class Background {
    constructor(source){
        this.posX = 0;
        this.posY = 0;

        const img = new Image();
        img.src = source;
        img.onload = () => {
          this.img = img;
        };
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, canvas.width, canvas.height);
    }
  }
  const background = new Background("../images/road.png");

  //.................Car Class...............................
 class Car {
    constructor(source, x, y, w, h) {
      this.posX = x;
      this.posY = y;
      this.width = w;
      this.height = h;
      this.speed = 20;

      const img = new Image();
      img.src = source;
      img.onload = () => {
        this.img = img;
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }

    top() {
      return this.posY;
    }

    bottom() {
      return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
    moveLeft() {
      if(this.posX > marginLeft) {
        this.posX -= this.speed;
      }
      
    }
    moveRight() {
      if(this.posX < marginRight - this.width){
        this.posX += this.speed;
      }  
    }
    checkCollision(obstacle) {
      return !(
        this.top() > obstacle.bottom() ||
        this.bottom() < obstacle.top() ||
        this.left() > obstacle.right() ||
        this.right() < obstacle.left()
      );
    }
 }
 const player = new Car("../images/car.png", 210, 500, 80, 160);

 //...................Obstacle.....................................
  class Obstacle {
    constructor(x, w){
      this.posX = x;
      this.posY = 0;
      this.width = w;
      this.height = 60;
      this.speed = 10;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    move () {
        this.posY += this.speed;
    }

    top() {
        return this.posY;
    }
  
    bottom() {
        return this.posY + this.height;
    }
  
    left() {
          return this.posX;
    }
  
    right() {
          return this.posX + this.width;
    } 
  }

  const obstacles = [];

  function createObstacle() {
    const minWidth = player.width;
    const maxWidth = marginRight - marginLeft - player.width - 20;

    const width = Math.floor(Math.random()*(maxWidth - minWidth)) + minWidth;

    const posX = Math.floor(Math.random()*maxWidth) + marginLeft;

    obstacles.push(new Obstacle(posX, width));
  }

  function updateObstacles() {
    for(let i = 0; i < obstacles.length; i += 1) {
      obstacles[i].move();
      obstacles[i].draw();
      if(obstacles[i] > canvas.height){
        obstacles.shift();
        score += 1;
      }
      if(player.checkCollision(obstacles[i])) {
        return true;
      }
    }

    if(frames %90 === 0){
      createObstacle();
    }
  }
};
