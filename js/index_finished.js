window.onload = () => {

    const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
  
      let gameInterval = null;
  
      let bgImg = new Image();
      bgImg.src = './images/road.png';
  
      const background = {
          image: bgImg,
          x: 0,
          y: 0,
          height: canvas.height,
          width: canvas.width,
          draw: function () {
              console.log('Drawing bg');
              ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
          }
      };
  
      let carImg = new Image();
      carImg.src = './images/car.png';
  
      const car = {
          image: carImg,
          x: canvas.width / 2 - 25,
          y: canvas.height - 100,
          height: 50,
          width: 50,
          draw: function () {
              console.log('Drawing car');
              ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
          }
      };
  
      class Obstacle {
          constructor() {
              (this.color = 'black'),
                  (this.x = Math.random() * canvas.width),
                  (this.y = 0);
              this.width = 300;
              this.height = 50;
          }
  
          draw() {
              (ctx.fillStyle = this.color),
                  ctx.fillRect(this.x, this.y, this.width, this.height);
          }
  
          move() {
              if (this.y > canvas.height) {
                  obstaclesArray.splice(this, 1);
              } else {
                  this.y += 2;
              }
          }
      }
  
      let obstaclesArray = [];
  
      setInterval(function () {
          obstaclesArray.push(new Obstacle());
      }, 3000);
  
      function checkCollision(car, obstacle) {
          let crash =
              car.x < obstacle.x + obstacle.width &&
              car.x + car.width > obstacle.x &&
              car.y < obstacle.y + obstacle.height &&
              car.y + car.height > obstacle.height;
          console.log(crash);
          if (crash) {
              cancelAnimationFrame(gameInterval);
              alert('crashed!');
              window.location.reload();
          } else {
              console.log('not crashing');
          }
      }
  
      document.getElementById('start-button').onclick = () => {
          console.log(car);
          startGame();
      };
  
      function startGame() {
          gameInterval = requestAnimationFrame(startGame);
          console.log('Game Started');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          background.draw();
          car.draw();
          obstaclesArray.forEach((obstacle) => {
              obstacle.draw();
              obstacle.move();
              checkCollision(car, obstacle);
          });
      }
  
      window.addEventListener('keydown', moveCar);
  
      function moveCar(event) {
          switch (event.keyCode) {
              case 37:
                  if (car.x > 0) {
                      car.x -= 5;
                  } else {
                      car.x = 0;
                  }
                  break;
              case 39:
                  if (car.x < canvas.width - car.width) {
                      car.x += 5;
                  } else {
                      car.x = canvas.width - car.width;
                  }
                  break;
              default:
                  break;
          }
      }
  };
  