var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ctx.fillRect(0, 0, 50, 50);
var frames = 0;
let timerId;

//Objects from the game:

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "./images/road.png";
  }

  draw() {
    if (this.y > canvas.height) this.y = 0;
    this.y+=4;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x,
      this.y - canvas.height,
      this.width,
      this.height
    );
  }
}



class Car {
  constructor() {
    this.x = canvas.width/2 - 40;
    this.y = canvas.height - 200;
    this.width = 80;
    this.height = 120;
    this.image = new Image();
    this.image.src = "./images/ketchup2.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}



class Obstacles {
  constructor(x,y,width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 30; 
  }

  draw(){
    this.y += 3
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


//NEW INSTANCES
let background = new Background();
let car = new Car();
let enemy = new Obstacles(55,40,300);


//FUNCTIONS 
function update(){
  frames++
  ctx.clearRect(0,0,canvas.width,canvas.height);

  background.draw();
  car.draw();
  enemy.draw();

  if (timerId) {
    timerId = requestAnimationFrame(update);
}
}



//Event listener 
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    addEventListener('keydown', event => {
        const keyLeft = 37;
        const keyRight = 39;

        if (event.keyCode === keyLeft && car.x > 0 + car.width) {
            car.x -= car.width / 2
        }

        if (event.keyCode === keyRight && car.x < canvas.width - car.width * 2) {
            car.x += car.width / 2
        }
    })

    timerId = requestAnimationFrame(update);
}
}