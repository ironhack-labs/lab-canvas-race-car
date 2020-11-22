window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
  }
};
const road = {
  x:50,
  y:20,
  width: 400,
  height: 500
};
const roadImg = new Image();
roadImg.src = './images/road.png';
roadImg.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(roadImg,road.x, road.y, road.width, road.height);
});

const car = {
  x:130,
  y:400,
  width: 70,
  height: 70
};
const carImg = new Image();
carImg.src = './images/car.png';
carImg.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(carImg,car.x, car.y, car.width, car.height);});
  
