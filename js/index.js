// Load start button and set up click event listener
window.onload = () => {
  document.getElementById(
    "start-button"
  ).onclick = () => {
    startGame();
  };
};

function startGame() {}

let imgRoad;
let imgCar;

// Load images before starting the game
function preload() {
  imgRoad = loadImage("/images/road.png");
  console.log("imgRoad loaded");
  imgCar = loadImage("/images/car.png");
}

class Car {
  // Constructor expects parameters for fill color, x and y coordinates that will be used to initialize class properties.
  constructor(cColor, x, y) {
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.width = 50;
  }

  // Method to start car movement with given speed
  start(speed) {
    this.speed = speed;
  }

  // Method to display the car
  display() {
    image(
      imgCar,
      this.x,
      this.y,
      this.width,
      100
    );
  }

  // Method to move the car to the left with a boundary check
  moveLeft() {
    if (this.x > this.getLeftBoundary()) {
      this.x -= 20;
    }
  }

  // Method to move the car to the right with a boundary check
  moveRight() {
    if (
      this.x <
      this.getRightBoundary() - this.width
    ) {
      this.x += 20;
    }
  }

  // Helper method to get the left boundary of the road
  getLeftBoundary() {
    let imgWidth = 600;
    let centerX = (width - imgWidth) / 2;
    return centerX + 70;
  }

  // Helper method to get the right boundary of the road
  getRightBoundary() {
    let imgWidth = 600;
    let centerX = (width - imgWidth) / 2;
    return centerX + imgWidth - 70;
  }
}

class Obstacle {
  // Constructor expects parameters for fill color, x and y coordinates, and width that will be used to initialize class properties.
  constructor(cColor, x, y, w, s) {
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.width = w;
  }

  // Method to start obstacle movement with given speed
  start(speed) {
    this.speed = speed;
  }

  // Method to display the obstacle
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, 10);
  }

  // Method to move the obstacle with a boundary check
  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = -10;
      this.x =
        Math.random() *
          (playerCar.getRightBoundary() -
            playerCar.getLeftBoundary() -
            this.width) +
        playerCar.getLeftBoundary();
    }
  }
}

let playerCar;
let obstacle1;
let obstacle2;
let obstacle3;

function setup() {
  createCanvas(800, 600);
  loop();
  playerCar = new Car(
    "blue",
    width / 2 - 25,
    height - 150
  );
  obstacle1 = new Obstacle(
    "red",
    Math.random() * 400,
    0,
    Math.floor(Math.random() * 100) + 50
  );
  obstacle2 = new Obstacle(
    "blue",
    Math.floor(Math.random() * 300) + 100,
    0,
    Math.floor(Math.random() * 100 + 100) // random width between 50 and 150
  );
  obstacle3 = new Obstacle(
    "purple",
    Math.floor(Math.random() * 500) + 100,
    0,
    Math.floor(Math.random() * 100) + 50 // random width between 50 and 150
  );

  obstacle1.start(2.3);
  obstacle2.start(4);
  obstacle3.start(2.9);
}

function draw() {
  let imgWidth = 600;
  let imgHeight = 800;
  let centerX = (width - imgWidth) / 2;
  let centerY = (height - imgHeight) / 2;
  image(
    imgRoad,
    centerX,
    centerY,
    imgWidth,
    imgHeight
  );
  playerCar.display();
  obstacle1.display();
  obstacle1.move();
  obstacle2.display();
  obstacle2.move();
  obstacle3.display();
  obstacle3.move();
  text("obstacle1.x: " + obstacle1.x, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    playerCar.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    playerCar.moveRight();
  }
  redraw();
}

//
