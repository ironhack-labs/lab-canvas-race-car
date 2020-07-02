const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

const roadImg = new Image();
roadImg.src = './images/road.png';
let roadY = 0;

const carImg = new Image();
carImg.src = './images/car.png';
let carX = (myCanvas.width - 54) / 2;
let carY = myCanvas.height - 150;
let speedX = 0;

let roadSpeed = 3;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameLoop();    
  };

  function gameLoop(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    startGame();

    roadY += roadSpeed;
    carX += speedX;
    if(roadY > myCanvas.height) roadY = 0;
    if (carX < 0) carX = 0;
    if (carX > myCanvas.width - 50) carX = myCanvas.width - 50;

    obstacle();

    window.requestAnimationFrame(gameLoop);
  }

  function startGame() {
    ctx.drawImage(roadImg, 0, roadY, myCanvas.width, myCanvas.height);
    ctx.drawImage(roadImg, 0, roadY - myCanvas.height, myCanvas.width, myCanvas.height);
    ctx.drawImage(carImg, carX, carY, 50, 100);
  }

  function obstacle() {
    // let frameCount = 0;
    let obY = 0;
    // let obLeft = Math.floor(Math.random() * (myCanvas.width - 80));
    // let obRight = Math.floor(Math.random() * (myCanvas.width - 80));
    // if (frameCount === 10) {
      // console.log('red!!')
      ctx.fillStyle = "red";
      ctx.fillRect(10, obY, myCanvas.width - 20, 50);
      frameCount = 0;
    // }

    frameCount++;
  }

  document.addEventListener('keydown', event => {
    switch (event.keyCode){
      case 37:
        speedX -= 15;        
        break;
      case 39:
        speedX += 15;
        break;
    }
  })

  document.addEventListener('keyup', event => {
    speedX = 0;
  })


}