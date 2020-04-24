const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function roadDraw() {
  const road = new Image();
  road.src = './images/road.png';
  road.addEventListener('load', () => {
    context.drawImage(road, 0, 0, canvas.width, canvas.height);
  });
}

function restartRoad() {
  context.clearRect(0,0,canvas.width,canvas.height);
  roadDraw();
}

const car = {
  x: canvas.width/2 - 25,
  y: canvas.height - 120,
  width: 50,
  height: 319*50 / 158,
  carDraw: () => {
    const img = new Image();
    img.src = './images/car.png';
    img.addEventListener('load', () => {
      context.drawImage(img, car.x, car.y, car.width, car.height);
    });
  },
  moveCar: (dir) => {
    if (dir === 'left') {
      car.x -= 5;
    } else if (dir === 'right') {
      car.x += 5;
    }
    restartRoad();
    car.carDraw();
  }
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
    roadDraw();
    car.carDraw();
    document.addEventListener('keydown', handleKeyEvent);
  }
};