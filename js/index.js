const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let frames  = 0
let requestID = true;

class Road {
  constructor(){
    this.x = 100;
    this.y = 100;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image()
    this.image.scr = "../images/road.png"
  };

  draw(){
    this.y -= 1.7;
    if(this.y < -canvas.width) this.x = 0;
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    ctx.drawImage(
        this.image,
        this.x,
        this.y + canvas.width,
        this.width,
        this.height
    );
  }
}
 class Car {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 80;
    this.image = new Image()
    this.image.src = "../images/car.png"
   }

    draw(){
     ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
   }
}

const car = new Car(250,600);
const road = new Road();

window.onload = () => {
 document.getElementById('start-button').onclick = () => {
   startGame();
 }
};

function startGame() {
 frames ++;
 ctx.clearRect(0,0,canvas.width,canvas.height);
 road.draw();
 car.draw();
 if(requestID){
    requestAnimationFrame(update);
} else {
    return undefined;
}
}


function update(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 road.draw();
 car.draw();
 frames ++;
}

addEventListener("keydown", (event) => {
 if(event.keyCode === 39){
   car.x += 20
   console.log(car)
 }

 if(event.keyCode === 37){
   car.x -= 20
   console.log(car)
 }
})
