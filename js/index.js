window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let frames = 0

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let obstaclesArr = []

  class Obstacle {
    constructor () {
      this.width = Math.floor(Math.random() * (200) + 100);
      this.height = 25;
      this.color = "red";
      this.x = Math.floor(Math.random() * 250);
      this.y = 0;
    }

    left() {
      return this.x;
    }
    right() {
      return this.x + this.width;
    }
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.height;
    }

    move() {
      this.y += road.speed;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Car {
    constructor () {
      this.x = 230;
      this.y = 600;
      this.width = 40;
      this.height = 80;
      const carImg = new Image();
      carImg.src = "./images/car.png";
      carImg.onload = () => {
      this.img = carImg;
    }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      if (this.x >= 60) {
      this.x -= 25;
      }
    }
    moveRight() {
      if (this.x <= 400) {
        this.x += 25;
    }}

    left() {
      return this.x;
    }
    right() {
      return this.x + this.width;
    }
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.height;
    }
   
    crashWith(obstacle) {
      return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
  }

  class Road {
    constructor () {
      this.x = 0;
      this.y = 0;
      this.speed = +5
      const roadImg = new Image();
      roadImg.src = "./images/road.png";
      roadImg.onload = () => {
      this.img = roadImg;
    }}
    move() {
      this.y += this.speed
      this.y %= canvas.height;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, canvas.width, canvas.height);
      ctx.drawImage(this.img, this.x, this.y - canvas.height +40, canvas.width, canvas.height);
    }
  }

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37: car.moveLeft(); break;
      case 39: car.moveRight(); break;
    }
  })

  const car = new Car();
  const road = new Road();
  let interval = undefined


  function startGame() {
    const roadImg = new Image();
    roadImg.src = "./images/road.png";
    function gameOver () {
      clearInterval(interval);
      ctx.save();
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fillRect (0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.font = "bold 50px Arial"; 
      ctx.fillText (`GAME OVER`, canvas.width / 2, canvas.height / 2);
      ctx.font = "bold 33px Arial"; 
      ctx.fillText (`RELOAD PAGE`, canvas.width / 2, canvas.height / 2 + 60);
      ctx.fillText (`TO REPLAY`, canvas.width / 2, canvas.height / 2 + 100);
      ctx.retore();
    }
    function checkGameOver() {
      const crashed = obstaclesArr.some(function (obstacle) {
        return car.crashWith(obstacle);
      });
     
      if (crashed) {
        gameOver();
      }
    }
    if (!interval) {
    interval = setInterval (() => {
      frames += 1
      road.move();
      road.draw();
      if (frames % 80 == 0) {
        let obstacle = new Obstacle;
        obstaclesArr.push (obstacle)
        obstaclesArr = obstaclesArr.filter((obstacle) => {
          console.log(obstaclesArr.length)
          return (obstacle.y < canvas.height);
        })
      }
      for (i = 0; i < obstaclesArr.length; i++) {
        obstaclesArr[i].draw();
        obstaclesArr[i].move();
      }
      car.draw();
      checkGameOver();

      ctx.save();
      ctx.fillStyle = "white";
      ctx.font = '30px Arial';
      ctx.fillText(`Score: ${Math.floor(frames/10)}`, 75, 50);
      ctx.restore();
      
      }, 1000/60)
    }
  }
  }