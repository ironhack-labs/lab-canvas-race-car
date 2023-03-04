class obstacle {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(color, y) {
    this.color = color;
    this.x = random(50, 250);
    this.y = y;
    this.w = random(100, 230);
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
    }
  }
}

let img;
let car;
let carX = 0;

// obstacles

let obs1;
let obs2;
let obs3;
let obs4;

function preload() {
  img = loadImage("../images/road.png");
  car = loadImage("../images/car.png");
}

function setup() {
  createCanvas(480, 740);
  obs1 = new obstacle("#cf2558", -150);
  obs2 = new obstacle("#cf2558", -350);
  obs3 = new obstacle("#cf2558", -550);
  obs4 = new obstacle("#cf2558", -750);

  obs1.start(1);
  obs2.start(1);
  obs3.start(1);
  obs4.start(1);
}

function collisionDetection(car, obstacle) {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // Collision detected!
    console.log("Boom");
  } else {
    // No collision
    this.color("blue");
  }
}

function draw() {
  background(220);
  image(img, 0, 0, 482, 741);

  //adding constrains
  let leftWall = 55;
  let rightWall = 400;

  const roadLimits = constrain(carX, leftWall, rightWall);
  image(car, roadLimits, 550, 50, 100);

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
  text("Score:", 40, 40);
  console.log(text);
}

//keyboard movement
function keyPressed() {
  console.log("Hello some key was pressed!");
  console.log(keyCode);
  console.log(UP_ARROW);

  if (keyCode === RIGHT_ARROW) {
    carX += 20;
  }
  if (keyCode === LEFT_ARROW) {
    carX -= 20;
  }
}
