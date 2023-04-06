const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d')
canvas.style.border = "2px solid black"
const startBtn = document.querySelector('start-button')
const startScreen = document.querySelector('.game-intro')

const bgImg = new Image()
  bgImg.src = '../images/road.png'
const carImg = new Image()
  carImg.src = '../images/car.png'

const carModel = () => {
  ctx.beginPath();
  ctx.drawImage(carImg, 227, 600, 40, 80);
  ctx.closePath();
}


window.onload = () => {
  canvas.style.display = "none"

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("start game");
    startScreen.style.display = "none";
    canvas.style.display = "flex";
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImg, 227,600, 40, 80)
  }

  const animate = () => {
    ctx.drawImage(carImg, 227,600, 40, 80)
  
  }

  document.addEventListener('keydown', event => {
    console.log(event)
    if (event.key === '37') {
      isMovingLeft = true
    }
    if (event.key === '39') {
      isMovingRight = true
    }
  })

  document.addEventListener('keyup', event => {
    console.log(event)
    if (event.key === '37') {
      isMovingLeft = false
    }
    if (event.key === '39') {
      isMovingRight = false
    }
  })
};
