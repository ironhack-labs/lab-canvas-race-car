window.onload = function() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let interval;
  let frames = 0;
  
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
  
  const images = {
    car: 'images/car.png'
  };

  class Road {
    clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw() {
      // Draw road
      ctx.fillStyle = '#27960B';    //pasto
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#899796 ';      //calle 
      ctx.fillRect(50, 0, canvas.width - 100, canvas.height);
      ctx.strokeStyle = 'white';

      ctx.beginPath();
      ctx.moveTo(65, 0);
      ctx.lineTo(65, canvas.height);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.lineWidth = 8;
      ctx.moveTo(canvas.width - 65, 0);
      ctx.lineTo(canvas.width - 65, canvas.height);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.setLineDash([20, 15]);
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.closePath();
      ctx.setLineDash([]);
    }
  }

  class Car {
    constructor(img) {
      this.x = canvas.width / 2 - 50;
      this.y = canvas.height - 100;
      this.width = 50;
      this.height = 100;
      this.img = new Image();
      this.img.src = img;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    move(n) {
      const newX = this.x + n;
      this.x = Math.max(Math.min(canvas.width - 100, newX), 50);
    }
  }

   class Obstacle {
    constructor(width) {
      this.x = 65 + Math.max(Math.random() * width);
      this.width = Math.min(
        Math.max(Math.random() * width, width / 3),
        width - 60
      );
      this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.lineWidth = 20;
      ctx.strokeStyle = '#860000';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.width, this.y);
      ctx.stroke();
      ctx.closePath();
      this.move(5);
    }
    move(n) {
      this.y += n;
    }
  }

  const road = new Road();
  const car = new Car(images.car);
  const obstaclesArray = [];

  function drawObstacles(array) {
    array.slice(0, 3).forEach(obstacle => {
      obstacle.draw();
    });
  }

  function update() {
    road.clear();
    road.draw();
    car.draw();
    if (frames % 60 === 0) {
      obstaclesArray.unshift(new Obstacle(300));
    }
    drawObstacles(obstaclesArray);
    frames++;
  }

  function startGame() {
    if (interval) return;
    interval = setInterval(update, 1000 / 60);
  }

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37:
        car.move(-15);
        break;
      case 39:
        car.move(15);
        break;
    }
  });

  
};