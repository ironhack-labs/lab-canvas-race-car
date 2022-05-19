window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  const myRoad = new Road();
  const myCar = new Car();
  const myBlocks = new TheBlocks();
  const blockColection = [];
  window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowLeft") {
      myCar.moveLeft();
      // this.carDraw();
    }

    if (event.key === "ArrowRight") {
      myCar.moveRight();
      // this.carDraw();
    }
  });
  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.heigth);
    myRoad.draw();
    myCar.carDraw();
    myBlocks.blockDraw();
    myBlocks.blockMove();
    blockColection.forEach((block) => {
      block.blockMove();
      block.blockDraw();
    });
  }, 1000 / 60);
  setInterval(() => {
    const myBlocks = new TheBlocks();
    blockColection.push(myBlocks);
  }, 2000);
}

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

// const road = new Image();
// road.src = "../images/road.png";

//context.drawImage(road, 0, 0, canvas.width, canvas.height);
/*setInterval(() => {
  context.drawImage(road, 0, 0, canvas.width, canvas.height);
}, 1000);*/

class Road {
  constructor() {
    this.road = new Image();
    this.road.src = "../images/road.png";
    this.road.addEventListener("load", () => {
      this.draw();
    });
  }

  draw() {
    context.drawImage(this.road, 0, 0, canvas.width, canvas.height);
  }
}

class Car {
  constructor() {
    this.x = 225;
    this.y = 570;
    this.car = new Image();
    this.car.src = "../images/car.png";
    this.car.addEventListener("load", () => {
      this.carDraw();
    });
  }
  carDraw() {
    context.drawImage(this.car, this.x, this.y, 50, 80);
  }

  moveLeft() {
    this.x -= 15;
  }
  moveRight() {
    this.x += 15;
  }
  //new adds to move the car
}
class TheBlocks {
  constructor() {
    this.x = 30 + Math.floor(Math.random() * 200); //Math.Ramdom
    this.y = 10;
    this.width = 100 + Math.floor(Math.random() * 180);
    //  this.theBlocks.addEventListener("load", () => {
    // this.blockDraw();
    //  });
  }
  blockDraw() {
    context.fillStyle = "brown";
    context.fillRect(this.x, this.y, this.width, 40);
  }
  blockMove() {
    this.y += 3;
  }
}
