
const canvas = document.getElementById("canvas");
const ctx    = canvas.getContext("2d");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}
  // Iteration 1

  function startGame() {
    const img = new Image();
    img.addEventListener('load', () => {
      ctx.drawImage(img, 0, 0, 500, 700);
    });
    img.src = '../images/road.png';
    //this.interval = setInterval(updateGameArea, 20);
  }


function updateGameArea() {
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  ctx.fillText("Score: " + car.x, 400,10);
  car.newPos()
  car.update();
}

// Iteration 2

class Car {
  constructor (width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }

  update() {
    const imgCar = new Image();
    imgCar.addEventListener('load', () => {
      this.imgCar = imgCar;
      ctx.drawImage(this.imgCar, this.x, this.y, 30, 50);
    });
    imgCar.src = '../images/car.png';
  }

    newPos() {
      this.x += this.speedX;
    }
    
    moveLeft() {
      this.x -= 10;
    }
    moveRight() {
      this.x += 10;
    }

  }

  

  const car = new Car(30, 30, 250, 350);
  car.update();


  document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 37: // left arrow
        car.moveLeft();
        console.log('left',  ghost);
        break;
      case 39: // right arrow
        car.moveRight();
        console.log('right',  ghost);
    }
  });

  document.addEventListener('keyup', (e) => {
    car.speedX = 0;
  });





