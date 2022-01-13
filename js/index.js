//creates the canvas (from html element) and sets context
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

class Car {
  constructor() {
    this.x = 110;
    this.y = 300;
    //load and draws the car when clicking 'start game'
    const img = new Image();
    
    this.img = img;
    img.src = "../images/car.png";
    this.draw(); 
  }
  moveLeft() {
    this.x -= 110;
  }
  moveRight() {
    this.y += 300;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 59, 119);
  }
}

var background = new Image();
background.src = "../images/road.png";
const car = new Car();

document.addEventListener('keydown', e => {
  switch (e.keyCode){
    case 39: car.moveRight();
    case 37: car.moveLeft();
  }
  startGame();
});


window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    //update canvas
    ctx.clearRect(0, 0, 500, 600);
    //draws the road when clicking 'start game'
    ctx.drawImage(background, 0, 0);
    //make a new instace of the Class car
    car.draw();
  }
};
