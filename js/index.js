const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');



window.onload = () => {
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {}
};



// iteration 1 & 2: Draw the game board & car 

const roadImg = new Image();
roadImg.src = './images/road.png';
roadImg.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(roadImg,50,20,400,500);
});

const carImg = new Image();
carImg.src = './images/car.png';
carImg.addEventListener('load', () => {
  // context.drawImage(Image, dX, dY, dWidth, dHeight);
  context.drawImage(carImg,130 ,400 , 70, 70);
});