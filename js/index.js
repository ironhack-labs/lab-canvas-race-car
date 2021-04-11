
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const roadImg = new Image();
roadImg.src = '../images/road.png';


const carImg = new Image();
carImg.src = '../images/car.png';
carImg.width = 50;
carImg.height = 70;
carImg.x = 225;
carImg.y = 600;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(roadImg, 0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage(carImg, 225, 600, carImg.width, carImg.height )
    // car.drawCar()
  }

};






// class Car {
//   constructor() {
//     this.img = new Image();
//     this.img.src = "../images/car.png";
//     this.x = 225;
//     this.y = 640;
//     this.width = 50;
//     this.height = 0;
//     this.movement = 15;
//   }
//   drawCar() {
//     ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
// }

// }

// const carX = 225;
// const carY = 640;
// const carWidth = 50;
// const carHeight = 50;
// const car = new Car(carX, carY, carWidth, carHeight);


function moveLeft(){
  this.x -= this.movement;
}

function moveRight(){
  moveRight() 
    this.x += this.movement;
}



document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      carImg.moveLeft();
      break;
    case "ArrowRight":
      carImg.moveRight();
      break;
  }
});