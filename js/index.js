

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const backgroundImage = {
//   img: img,
//   x: 0,
//   speed: -1,

//   move: function() {
//     this.x += this.speed;
//     this.x %= canvas.width;
//   },
// const img = new Image();
// img.src = 'images/road.png';

// javascripts/intro.js
// const $canvas = document.querySelector('canvas');
// const ctx = $canvas.getContext('2d');

// const img = new Image();
// img.src = "../images/road.png"

// let ctx, mainCanvas, mainCtx;

// img.onload = function(){
//   // Creando el fondo
//   backgroundCanvas = document.getElementById("canvas");
//   ctx = backgroundCanvas.getContext("2d");

//   mainCanvas = document.getElementById("main-canvas");
//   mainCtx = mainCanvas.getContext("2d");
// }

// const backgroundImage = {
// img: img,
// x: 0,
// y: 0,
// speed: -1,

// move: function(){
//   this.y += this.speed;
//   this.y %= backgroundCanvas.height;
// },

// draw: function(){
//   ctx.drawImage(this.img, 0, this.y);
//   if (this.speed < 0){
//     ctx.drawImage(this.img, 0, this.y + this.img.height);
//   } else {
//     ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
//     }
//   },
// };

// const img = new Image();
// img.src = '../images/road.png';

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// const backgroundImage = {
//   img: img,
//   y: 0,
//   speed: -1,
//   height: 700,

//   move: function() {
//     this.y = this.speed;
//     this.y %= canvas.height;
//   },

//   draw: function() {
//     ctx.drawImage(this.img, this.y, 0);
//     if (this.speed < 0) {
//       ctx.drawImage(this.img, this.y + canvas.height, 0);
//     } else {
//       ctx.drawImage(this.img, this.y - this.img.height, 0);
//     }
//   },
// };

// function updateCanvas() {
//   backgroundImage.move();

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   backgroundImage.draw();

//   requestAnimationFrame(updateCanvas);
// }

// // start calling updateCanvas once the image is loaded
// img.onload = updateCanvas;



// const roadImage = new Image();


// roadImage.src = '../images/road.png'


// let roadX = 0;
// let roadY = 0;

// function draw(x, y) {


// ctx.clearRect(0, 0, 500, 700);

// ctx.drawImage(roadImage, roadX, roadY, 250, 600);

// roadY += 3;
// setTimeout(`draw(${x}, ${y})`, 30)
// }

// onload.drawImage(draw);

//////// CANVAS ////////





const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
// const $button = document.querySelector("start-button")
// const road = {
//   this.img = new Image
//   this.img.src = "https://github.com/ironhack-labs/lab-canvas-race-car/blob/master/images/road.png"
//   this.img.onload = () => {
//     this.draw()
//   }
// };


let intervalId
let frames = 0
const obstacles = []


//////// CLASSES ////////

class Road {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.heigth = $canvas.height
    // this.road = new Road()
    this.road = new Image()
     this.road.src = "../images/road.png"
     this.road.onload = () => {
       this.draw()
     }
  }
  draw() {
    this.y++
    if (this.y < -$canvas.height) this.y = 0
    ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
    ctx.drawImage(
      this.img,
      this.x,
      this.y + $canvas.height,
      this.width,
      this.heigth
    )
  }
}

class Car {
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 30
    this.height = 50
    // this.car = new Car()
    this.img = new Image()
    this.img.src = "../images/car.png"
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
  }
}

/////////// KEYS //////



/////////  HELPER  /////////



function update(){
  clearCanvas()
road.draw()
car.draw()
}

function clearCanvas(){
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}





///////  MAIN  ///////

 const road = new Road()
 const car = new Car(235, 650)

//  intervalId = setInterval(update, 1000 / 60)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { 
clearCanvas()
frames++
ctx.drawImage(road, 0, 0, 500, 700)

    
  }
};





// class Road {
//   constructor(x,y, color){
//     this.x = x
//     this.y = y
//     this.width = 300
//     this.height = 700
//     this.color = color
    
//   }
// }


/*
const $canvas = document.getElementById("canvas")
const ctx = $canvas.getContext("2d")

let intervalId = 0;
let frames = 0;


const roadImg = new Image();
roadImg.src = "https://github.com/ironhack-labs/lab-canvas-race-car/blob/master/images/road.png"


function clearCanvas(){
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}



*/