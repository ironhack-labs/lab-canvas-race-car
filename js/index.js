// window.onload = () => {
//     document.getElementById('start-button').onclick = () => {
//         startGame();
//     };
//     function startGame() {}
  
//   };

let imgRoad;
let imgCar;
let obstacle;
let car;


function preload(){
    imgRoad = loadImage('/images/road.png');
    imgCar = loadImage('/images/car.png');
    
}

function setup(){
    createCanvas(500,690);
    obstacle = new Obstacles();
    car = new Car() 
}


class Car {
    constructor() {
        this.x = 218;
        this.y = 570;
        this.w = 60;
        this.h = 90
    }

    draw(){
   
        image(imgCar, this.x, this.y,this.w ,this.h,0 ,0);
    }
    
    moveRight() {
        this.x += 15;
    }
    
    moveLeft() {
        this.x -= 15;
    }
    
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        car.moveLeft()
    } 
    
    if (keyCode === RIGHT_ARROW) {
        car.moveRight()
    }
}

function draw(){
    image(imgRoad,0,0,500,690);
    // image(imgCar, carX, carY,carW,carH,0,0)
    car.draw();
    
    obstacle.draw();

    collisionDetection(car, obstacle)
   
}


 
function collisionDetection(rect1, rect2) {

  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    console.log(alert("Game Over"));

    // let gameOverH1 = document.createElement("h1");
    // gameOverH1.innerHMTL = "Game Over"
  } 
}

 
