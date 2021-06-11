
const road = document.getElementById('road')
const carImage = document.getElementById('car')


const backgroundCanvas = document.getElementById('canvas');
ctx = backgroundCanvas.getContext('2d');

// The Car Object //
const car = {

  img: carImage,
  x: 100,
  y: 320,
  speed: 10,
  w: 40,
  h: 80,
  moveLeft: function () {
    if (this.x - this.speed >= -10) {
      this.x -= this.speed
    }
  },
  moveRight: function () {
    if (this.x + this.speed < 265) {
      this.x += this.speed
    }
  },
  drawCar() {
    ctx.drawImage(car.img, car.x, car.y, car.w, car.h)
  }
}

// The background Object // 

const backgroundImage = {
  img: road,
  x: 0,
  y: 0,
  speed: 1.5,

  move: function () {
    this.y += this.speed;
    this.y %= backgroundCanvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    }
  },
};

// class constructor for upcoming obstacles // 
class Obstacle {
  constructor(width, height, x, y, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
  }
};

// counter for creating Obstacles all 130 frames 
let counter = 0;

// storing created obstacles 
const obList = [];

// create a new obstacle all 130 frames 
function newObstacle() {

  if (counter % 130 === 0) {
    counter = 0;
    let minGap = 55;
    let maxGap = 150;
    let x = 0;
    let y = 0;
    let width = Math.floor(Math.random() * backgroundCanvas.width - minGap);
    let height = 15;
    let minWidth = backgroundCanvas.width - width;
    let secondX = width + Math.floor(Math.random() * ((maxGap - minGap))) + minGap;
    let color = 'green';

    obList.push(new Obstacle(width, height, x, y, color))
    obList.push(new Obstacle(minWidth, height, secondX, y, color))
  }
}

// CHECK FOR CRASHES DOESNT WORK YET! 
function checkForCrashes() {
  let left = obList[0];
  let right = obList[1];
  //Coordinates left Obstacle & left corner of the car 
  let lobX = left.x + left.width
  let lobY = left.y
  let lcarX = car.x;
  let lcarY = car.y;
  // Coordinates right Obstacle & right corner of the car
  let robX = right.x;
    let robY =right.y+right.height;
      let rcarX =car.x+car.width;
      let rcarY =car.y;

  if (lcarX <= lobX && lobY >= lcarY) { alert('crash!') }
  //if( rcarX>=robX){alert('crash!')}

}



function updateObstacle() {
  if (obList.length != 0) {
    obList.forEach(e => {
      e.y += 1.5;
      ctx.fillStyle = e.color;
      ctx.fillRect(e.x, e.y, e.width, e.height);

      if (e.y > 450) {
        obList.splice(0, 2)
      }

    })
  }
}

function updateBackgroundCanvas() {
  backgroundImage.move();
  backgroundImage.draw();

};




function run() {
  ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
  updateBackgroundCanvas();
  car.drawCar();

  newObstacle();
  updateObstacle();

  counter += 1;
  checkForCrashes();
  requestAnimationFrame(run);

};


document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { car.moveLeft() }
  if (event.key === 'ArrowRight') { car.moveRight() }
}
)

document.getElementById('start-button').addEventListener('click', run)

