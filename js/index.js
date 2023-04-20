
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const road = new Image();
let speed = 0;
let rectangles = [];

road.src = "./images/road.png";
ctx.fillStyle = '#F8C8DC';


class Car{
  constructor(){
    this.x = 225;
    this.y = 570;
    const car = new Image();
    car.addEventListener('load', () => {
      this.car = car;
    })
    car.src = "./images/car.png";
  }
  

  moveLeft() {
    if (this.x > 10) {
      this.x -= 10;
    } 
  }
  moveRight() {
    if (this.x < canvas.width - 50) {
      this.x += 10;
    }
    
  }
  moveUp() {
    if (this.y > 0){
      this.y -= 10;
    }
  }
  moveDown() {
    if (this.y < canvas.height - 100) {
      this.y += 10;
    }
  }
  draw() {
    ctx.drawImage(this.car, this.x, this.y, 50, 100)
  }
}



class Rectangle {
  constructor() {
    this.x = Math.floor(Math.random() * 500);
    this.y = 0;
    this.width = Math.floor(Math.random() * 100);
    this.height = 20;
    this.color = 'brown';
  }

  update() {
    console.log('updating rectangle')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveDown() {
    this.y +=1;
  }

  
}
const pinkRectangle = new Rectangle();



const blueCar = new Car()  


function startGame() {
  console.log("starting");
  ctx.drawImage(road, 0, 0, 500, 700);
  blueCar.draw();
  setInterval(()=>{
    console.log('updating rectangle')
    speed += 1;
    updateCanvas(); 
  }, 20)
  setInterval(()=>{
    rectangles.push(new Rectangle) 
  },2000)
}
function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(road, 0, 0, 500, 700);
  blueCar.draw();
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].update();
    rectangles[i].moveDown();
  }
  
}



document.addEventListener('keydown', e => {
  console.log('here');
  switch (e.keyCode) {
    case 37:
      blueCar.moveLeft();
   
      break;
    case 39:
      blueCar.moveRight();
      break;
    case 38:
  }
  updateCanvas();
})




window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};


