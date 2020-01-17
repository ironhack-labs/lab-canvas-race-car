const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let interval;
let frames = 0;
let obstacles = [];

class Background {
  constructor() {
    this.y = 0;
    this.x = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw() {
    //street and grass

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 45, 600);

    ctx.fillStyle = "grey";
    ctx.fillRect(45, 0, 10, 600);

    ctx.fillStyle = "white";
    ctx.fillRect(55, 0, 10, 600);

    ctx.fillStyle = "grey";
    ctx.fillRect(65, 0, 370, 600);

    ctx.fillStyle = "white";
    ctx.fillRect(435, 0, 10, 600);

    ctx.fillStyle = "grey";
    ctx.fillRect(445, 0, 10, 600);

    ctx.fillStyle = "green";
    ctx.fillRect(455, 0, 45, 600);

    //middle lines

    ctx.fillStyle = "white";
    ctx.fillRect(247, 5, 3, 135);

    ctx.fillStyle = "white";
    ctx.fillRect(247, 150, 3, 135);

    ctx.fillStyle = "white";
    ctx.fillRect(247, 305, 3, 135);

    ctx.fillStyle = "white";
    ctx.fillRect(247, 455, 3, 135);

    //img
    /* const image = new Image();
    image.src = "./images/car.png"
    image.onload = function(){ctx.drawImage(image, 220, 500, 75, 100)}
    //ctx.drawImage(image, 220, 520, 20, 20)Ç*/
  }
}

class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.sx = 0;
    this.sy = 0;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.image.onload = () => {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      //this.draw()
    };
  }

  drawCar() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveCar(keyCode) {
    if (this.x > canvas.width - 100) {
      return;
    } else {
      if (typeof keyCode === "number") {
        if (keyCode === 39) {
          /*right*/ this.x += 13;
          this.move();
        } else if (keyCode === 37) {
          /*left*/ this.x -= 13;
          this.move();
        } else {
          return;
        }
      }
    }
  }
  goRight() {
    if (this.x > canvas.width - 100) return;
    this.x += 10;
    this.move();
  }
  goLeft() {
    this.x -= 10;
    this.move();
  }
  move() {
    this.sx += 10;
  }
}

class Obstacles {
  constructor() {
    this.items = []
    this.frames = -1
    this.evaded = 0
  }

  createItem() {
    this.frames += 1

    if(this.frames % 150 !== 0) {
      return
    }

    let width = Math.floor(Math.random() * (canvas.width - 150))
    let x = Math.floor(Math.random() * (canvas.width - width))

    let obstacle = { x, y: 0, width, height: 30, evaded: false  }
    this.items.push(obstacle)
  }

  draw() {
    this.items.forEach(item => {
      item.y += 4
      ctx.fillStyle = "red";
      ctx.fillRect(item.x, item.y, item.width, item.height);

      if(!item.evaded && item.y > canvas.height) {
        this.evaded += 1
        item.evaded = true
      }
    })

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + this.evaded, (canvas.width / 2) - 20, 20);
  }

  detectCollition(car) {
    return this.items.find(obstacle => {
      let evadeCollideXLeft = (car.x + car.width) < obstacle.x
      let evadeCollideXRight = car.x > (obstacle.x + obstacle.width)

      let onCar = (obstacle.y + obstacle.height) > car.y && !(obstacle.y > canvas.height)

      if(onCar && !(evadeCollideXLeft || evadeCollideXRight)) {
        console.log({ onCar, evadeCollideXLeft, evadeCollideXRight })
        return true
      } else {
        return false
      }
    })
  }
}

const carHeight = 100;
const carWidth = 70;
function startGame() {
  let carPlace = canvas.height - carHeight;
  let carPlaceX = (canvas.width - carWidth) / 2;
  let bg = new Background();
  let car = new Car(carPlaceX, carPlace, carWidth, carHeight);
  let ots = new Obstacles()

  document.addEventListener("keydown", e => {
    car.moveCar(e.keyCode);
    const carPosition = Number(car.x);
  });

  let interval = setInterval(() => {
    frames++;
    ots.createItem()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();
    car.drawCar();
    ots.draw();

    if(ots.detectCollition(car)) {
      clearInterval(interval)

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "red";
      ctx.font = "30px Arial";
      ctx.fillText("Game over", 20, 50);

      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.fillText("Final Score", 20, 90);

      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.fillText(ots.evaded, 20, 130);
    }
  }, 1000/60);

  bg.draw();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
