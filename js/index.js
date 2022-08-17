window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
};
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function startGame() {
  const roadImg = new Image();
    roadImg.src = './images/road.png';
    roadImg.onload = function() {
    ctx.drawImage(roadImg, 0, 0, 500, 700);
  }
  car.start()
}
const car = {
  start: function () {
    const carImg = new Image();
    carImg.src = './images/car.png';
    carImg.onload = function() {
      ctx.drawImage(carImg, 225, 600, 50, 100);
    }
  }
}

