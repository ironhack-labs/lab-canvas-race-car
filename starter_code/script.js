const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;



const drawRoad = () => {
  //barra verde esquerda
  context.fillStyle = 'green';
  context.fillRect(0, 0, 40, 750);

  //barra verde direita
  context.fillStyle = 'green';
  context.fillRect(410, 0, 40, 750);

  //Estrada cinzenta
  context.fillStyle = 'grey';
  context.fillRect(40, 0, 370, 750);

  //linha branca esquerda
  context.fillStyle = 'white';
  context.fillRect(55, 0, 15, 750);

  //linha branca direita
  context.fillStyle = 'white';
  context.fillRect(380, 0, 15, 750);

  //linha riscada centro
  context.strokeStyle = 'white';
  context.lineWidth = 5;
  context.beginPath();
  context.setLineDash([15, 30]);
  context.moveTo(225, 0);
  context.lineTo(225, 750);
  context.stroke();
  context.closePath();
}


//CAR class

class Car {
  constructor(x, y) {
    this.x = 200;
    this.y = 225;
  }
  moveLeft() {
    this.x--;
  }
  moveRight() {
    this.x++;
  }
}

const car = new Car(0, 0);


//imagem carro
const drawCar = () => {
  const IMAGE_URL = './images/car.png';
  const image = new Image();
  image.src = IMAGE_URL;
  image.addEventListener('load', () => {
    const imageWidth = image.width / 2;
    const imageHeight = image.height / 2;
    context.drawImage(image, car.x, car.y, imageWidth, imageHeight);
  });
}

//move the car right(left)

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      car.moveLeft();
      console.log('left');
      drawEverything();
      break;

    case 39:
      car.moveRight();
      console.log('right');
      drawEverything();
      break;
  }
});



window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

  }
};
console.log(context.fillStyle);




function drawEverything() {

  context.clearRect(0, 0, 450, 750);
  drawRoad();
  drawCar();
}

drawEverything();