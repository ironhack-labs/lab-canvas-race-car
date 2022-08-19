const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// let carSpeedX = 0
// let carSpeedY = 0
let carPositionX = 225
let carPositionY = 500

function startGame() {
    const roadImg = new Image()
    roadImg.src = 'images/road.png'
    roadImg.onload = function (){
      ctx.drawImage(roadImg,0,0,500,600)
    }
     const carImg = new Image()
    carImg.src = 'images/car.png'
    carImg.onload = function(){
      ctx.drawImage(carImg, carPositionX,carPositionY,50,100)
    }
    
    document.addEventListener("keydown", ({key}) => {
    switch (key) {
      case 'ArrowLeft':
        carPositionX -= 5
      break;
       case 'ArrowRight':
        carPositionX += 5
      break;
    }
  
    ctx.drawImage(carImg,carPositionX,carPositionY,50,100)
    // ctx.clearRect(0,0,500,600)
  });
  }

  

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
};
