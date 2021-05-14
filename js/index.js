window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  class Obstacle {
    constructor () {
      this.width = Math.floor(Math.random() * (250) + 100);
      this.height = 25;
      this.color = "blue";
      this.x = Math.floor(Math.random() * 250);
      this.y = 0;
    }
    
    draw() {
      const obstacleCtx = document.getElementById('canvas').getContext('2d');
      obstacleCtx.fillStyle = this.color;
      obstacleCtx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  class Car {
    constructor () {
      this.x = 230;
      this.y = 600;
      const carImg = new Image();
      carImg.src = "./images/car.png";
      carImg.onload = () => {
      this.img = carImg;
    }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 40, 80);
    }
    moveLeft() {
      if (this.x >= 60) {
      this.x -= 25;
      }
    }
    moveRight() {
      if (this.x <= 400) {
        this.x += 25;
    }
  }
  }

  class Road {
    constructor () {
      this.x = 0;
      this.y = 0;
      this.speed = +3
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

  function startGame() {
    const roadImg = new Image();
    roadImg.src = "./images/road.png";
    const interval = setInterval (() => {
      road.move();
      road.draw();
      car.draw();
      }, 1000/60)
  }

};
