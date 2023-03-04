class obstacle {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(cColor, x, y) {
    this.color = cColor;
    this.x = x;
    this.y = y;
    this.speed = 0;
  }

  start(speed) {
    // method expects parameter!
    this.speed = speed;
  }

  display() {
    // method!
    fill(this.color);
    rect(this.x, this.y, 100, 20);
  }

  move() {
    //animates the shapes in a straight line
    this.y += this.speed;

    //moves rect randomly back when they move off the canvas
    if (this.y > 700) {
      this.y = random(-500, -100) + random(100, 500);
      this.x = random(50, 700);
    }
  }
}

let img;
let car;
let carX = 0;
const initialX = 200;

////obstacles

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
  obs1 = new obstacle("#cf2558", 70, 300);
  obs2 = new obstacle("#cf2558", 70, 300);
  obs3 = new obstacle("#cf2558", 70, 300);
  obs4 = new obstacle("#cf2558", 70, 300);

  obs1.start(1);
  obs2.start(1);
  obs3.start(1);
  obs4.start(1);
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
}
//keybord movement
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
