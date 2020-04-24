const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const road = {
  x: 0,
  y: 0,
  speed: 1/16,
  width: canvas.width,
  height: canvas.height,
  img: new Image(),
  move: function() {
    road.y += road.speed;
    road.y %= road.height;
  },
  draw: function() {
    road.img.src = './images/road.png';
    context.drawImage(road.img, road.x, road.y, road.width, road.height);
    context.drawImage(road.img, road.x, road.y - road.height, road.width, road.height);
  }
}

const car = {
  x: canvas.width/2 - 30,
  y: canvas.height - 150,
  width: 60,
  height: 319*60 / 158,
  img: new Image(),
  carDraw: () => {
    car.img.src = './images/car.png';
    context.drawImage(car.img, car.x, car.y, car.width, car.height);
  },
  moveCar: (dir) => {
    if (dir === 'left') {
      car.x -= 10;
    } else if (dir === 'right') {
      car.x += 10;
    }
  }
}

function updateRoad() {
  context.save();
  road.move();
  context.clearRect(0 , 0, canvas.width, canvas.height);
  road.draw();
  car.carDraw();
  context.restore();
  //requestAnimationFrame(updateRoad);
}

function handleKeyEvent(event) {
  if (event.code === 'ArrowLeft') {
    car.moveCar('left');
  } else if (event.code === 'ArrowRight') {
    car.moveCar('right');
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    road.img.addEventListener('load', updateRoad);
    //requestAnimationFrame(updateRoad);
    setInterval(updateRoad,16);
    document.addEventListener('keydown', handleKeyEvent);
  }
};

// Hacer un set timeout para empezar la animación de la carretera
// en ese tiempo, cuando se pique al button dibujar un 3
// Limpiar y dibujar un 2 despues de 1 segundo
// Despues del 1 empezar la animación.