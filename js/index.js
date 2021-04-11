
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const roadImg = new Image();
roadImg.src = '../images/road.png';


const carImg = new Image();
carImg.src = '../images/car.png';
carImg.width = 50;
carImg.height = 50;


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(roadImg, 0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage(carImg, 225, 640, carImg.width, carImg.height )
  }

};


// class Car {
//   constructor() {
//     this.img = new Image();
//     this.img.src = carImg.src = '../images/car.png';

  
// }
// }

