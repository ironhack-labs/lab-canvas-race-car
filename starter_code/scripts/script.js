$canvas = document.querySelector('canvas')
context = $canvas.getContext('2d');
const HEIGHT = 600
imageCar = new Image();
imageCar.src = "./images/car.png"

class Car {
  constructor(posX) {
      this.posX = posX;
}
  moveRight(){
  if (this.posX !== 320) {
      this.posX += 10;
    } else {
      this.posX = this.posX;
    }
}
 moveLeft() {
  if (this.posX !== 40) {
    this.posX -= 10;
    } else {
      this.posX = this.posX;
    }
} 
}

const fastCar = new Car(200, 500);

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    paintRoad();
    startGame();
  };

  function paintRoad() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 20, 600);
    context.fillRect(380, 0, 20, 600);
    context.fillStyle = 'grey';
    context.fillRect(20, 0, 10, 600);
    context.fillRect(370, 0, 10, 600);
    context.fillStyle = 'white';
    context.fillRect(30, 0, 10, 600);
    context.fillRect(360, 0, 10, 600);
    context.fillStyle = 'grey';
    context.fillRect(40, 0, 320, 600);
  // 150-170
  for (let i = 20; i < HEIGHT; i += 50) {
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(197, i);
    context.lineTo(197, i+30);
    context.stroke();
    context.closePath();
  }
}
// width of road is from 40 to 320
  function drawCar(posX) {
    const imageHeight = imageCar.height;
    const imageWidth = imageCar.width;
    const size = 0.25;
    context.drawImage(imageCar, posX, 500, imageWidth * size, imageHeight * size )
  }

  function moveRight() {

  }


  window.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37:
        context.clearRect(fastCar.posX, 500, 39.5, 79.75);
        paintRoad();
        fastCar.moveLeft(fastCar.posX)
        drawCar(fastCar.posX, 500); 
        console.log('left');
      break;
      case 39:
        context.clearRect(fastCar.posX, 500, 39.5, 79.75);
        paintRoad();
        fastCar.moveRight(fastCar.posX)
        drawCar(fastCar.posX, 500); 
        console.log('right');
        break; 
    }
  })

  function slide () {
    window.requestAnimationFrame(() => {

      
      slide();
    });
  }

  slide();


  function startGame() {
    //fastCar.posX = 200;
    drawCar(200, 500)
  }
};
