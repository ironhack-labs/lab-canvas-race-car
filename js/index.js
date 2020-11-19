const canvas = document.getElementById('game-board');
const context = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}
  let x = 500
  let y = 700
  function startGame() 


// iteration 1 & 2: Draw the game board & car 

const road = {
  x:400,
  y:600,
  width:300,
  height:300,
};

const roadImg = new Image();
roadImg.src = './images/road.png';

const carImg = {
  x:300,
  y:500,
  width:70,
  height:70,
};
  
const carImg = new Image();
carImg.src = './image/car.png';

const drawEverything = () => {
  context.drawImage(roadImg, road.x, road.y, road.width, road.Height);
  context.drawImage(carImg, car.x, car.y, car.width, car.Height);
  };
