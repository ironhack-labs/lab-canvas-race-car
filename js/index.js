class Obstacle {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(color, y) {
    this.color = color;
    this.x = random(50, 250);
    this.y = y;
    this.w = random(100, 230);
    this.h = 20;
    this.initialY = y;
    this.speed = 0;
  }

  start(speed) {
    this.speed = speed;
  }

  display() {
    // method!
    fill(this.color);
    rect(this.x, this.y, this.w, 20);
  }

  move() {
    // animates the shapes in a straight line
    this.y += this.speed;

    // moves rect back when it moves off the canvas
    if (this.y > 700) {
      this.y = -100;
      this.x = random(50, 250);
      this.w = random(100, 230);
      scoreCount++;
      console.log(scoreCount);
    }
  }
}

//count
let scoreCount = 0;
// car
let imgRoad;
let car = {
  x: 250,
  y: 550,
  w: 50,
  h: 100,
};

// obstacles

let obs1;
let obs2;
let obs3;
let obs4;

function preload() {
  imgRoad = loadImage("../images/road.png");
  imgCar = loadImage("../images/car.png");
}

function setup() {
  createCanvas(480, 740);
  obs1 = new Obstacle("#cf2558", -150);
  obs2 = new Obstacle("#cf2558", -350);
  obs3 = new Obstacle("#cf2558", -550);
  obs4 = new Obstacle("#cf2558", -750);

  obs1.start(1.5);
  obs2.start(1.5);
  obs3.start(1.5);
  obs4.start(1.5);
}

function collisionDetection(rect1, rect2) {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // Collision detected!
    noLoop();

    fill("black");
    rect(0, 350, 750, 400);
    fill("white");
    rect(0, 350, 20, 400);
    fill("white");
    rect(460, 350, 20, 400);
    fill("#3D3D3D");
    rect(0, 350, 700, 30);

    textSize(40);
    strokeWeight(0);
    fill("red");
    text("Game Over!", 130, 500);

    textSize(50);
    strokeWeight(0);
    fill("white");
    text("Your final score ", 70, 570);

    textSize(50);
    strokeWeight(0);
    fill("white");
    text(` ${scoreCount}`, 200, 640);
  }
}

function draw() {
  background(220);
  image(imgRoad, 0, 0, 482, 741);

  //adding constrains
  let leftWall = 65;
  let rightWall = 370;

  car.x = constrain(car.x, leftWall, rightWall);
  image(imgCar, car.x, car.y, car.w, car.h);

  obs1.display();
  obs2.display();
  obs3.display();
  obs4.display();

  obs1.move();
  obs2.move();
  obs3.move();
  obs4.move();

  textSize(40);
  strokeWeight(0);
  fill("white");
  text(`Score: ${scoreCount}`, 70, 60);

  collisionDetection(car, obs1);
  collisionDetection(car, obs2);
  collisionDetection(car, obs3);
  collisionDetection(car, obs4);
}

//keyboard movement
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    car.x += 25;
  }
  if (keyCode === LEFT_ARROW) {
    car.x -= 25;
  }
}
