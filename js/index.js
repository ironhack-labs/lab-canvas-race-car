const canvas = document.getElementById('canvas'); 
const ctx = canvas.getContext('2d');

const roadImg = new Image();
roadImg.src = './images/road.png';

const imgCar = new Image();
imgCar.src = './images/car.png';

function startGame() {
  ctx.drawImage(roadImg, 0, 0, 350, 550);
  ctx.drawImage(imgCar, 150, 420, 50, 100);
}; 


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }};




    
  











