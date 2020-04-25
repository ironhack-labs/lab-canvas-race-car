const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const road = {
  x: 0,
  y: 0,
  speed: 5,
  width: canvas.width,
  height: canvas.height,
  obstacles : [],
  score: 0,
  img: new Image(),
  // Método para poder realizar la carretera infinita
  move: function() {
    road.y += road.speed;
    road.y %= road.height;
  },
  // Dibuja la carretera
  draw: function() {
    road.img.src = './images/road.png';
    context.drawImage(road.img, road.x, road.y, road.width, road.height);
    context.drawImage(road.img, road.x, road.y - road.height, road.width, road.height);
  },
  // Función que crea obstáculos y los añade en el array
  createObstacles: function() {
    const obst = new Obstacle();
    road.obstacles.push(obst);
  },
  // Desplaza y dibuja los obstáculos creados
  updateObstacles: function() {
    context.fillStyle = 'red';
    road.obstacles.forEach(obst => obst.y += road.speed);
    road.obstacles.forEach(obst => context.fillRect(obst.x, obst.y, obst.width, obst.height));
  },
  // Aumenta  el marcador cada vez que desaparece un obstáculo y dibuja el marcador
  updateScore: function() {
    road.obstacles.forEach(obst => {
      if (obst.y > road.height) {
        road.score++;
        road.obstacles.shift();
      }
    });
    context.font = '24px sans-serif';
    context.fillStyle = 'white';
    context.fillText('Score: ' + road.score, 300, 40);
  },
  // Dibuja una imagen the game over y muestra el marcador final
  gameOver: function() {
    road.draw();
    const img = new Image();
    img.src = './images/gameover.png';
    img.addEventListener('load', function() {
      context.drawImage(img, canvas.width/2 - 228, canvas.height/2 - 196, 456, 192);
    });
    context.font = '96px sans-serif';
    context.fillStyle = 'white';
    context.fillText('Score: ', 109, 500);
    context.fillText(road.score, 310, 600);
  }
}

const car = {
  x: canvas.width/2 - 25,
  y: canvas.height - 150,
  width: 50,
  height: 319*50 / 158,
  img: new Image(),
  // Dibuja el coche al final de la carretera
  carDraw: function() {
    car.img.src = './images/car.png';
    context.drawImage(car.img, car.x, car.y, car.width, car.height);
  },
  // Desplaza en el eje horizontal el coche
  moveCar: function(dir) {
    if (dir === 'left') {
      car.x -= 20;
    } else if (dir === 'right') {
      car.x += 20;
    }
  },
  // Comprueba si el coche ha colisionado con algún obstáculo
  checkCrash: function() {
    if (road.obstacles[0] != undefined) {
      if (road.obstacles[0].y > car.y - road.obstacles[0].height && road.obstacles[0].y < car.y + car.height) {
        for (let i = car.x; i < car.x + car.width; i++) {
          if (i > road.obstacles[0].x && i < road.obstacles[0].x + road.obstacles[0].width) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
// Clase para crear los obstáculos
class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random()*200 + 70);
    this.y = 0;
    this.width = Math.floor(Math.random()*canvas.width*0.05 + canvas.width*0.3);
    this.height = 20;
  }
}
// Llamada recursiva para dibujar la carretera, el coche, los obstáculos y el marcador. Mientras el coche no choque, sigue la recursividad.
function updateRoad() {
  context.save();
  road.move();
  context.clearRect(0 , 0, canvas.width, canvas.height);
  road.draw();
  car.carDraw();
  road.updateObstacles();
  road.updateScore();
  context.restore();
  if (!car.checkCrash()) {
    requestAnimationFrame(updateRoad);
  } else {
    road.gameOver();
  }
}
// Detecta la tecla izquierda y derecha
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
    requestAnimationFrame(updateRoad);
    setInterval(road.createObstacles, 1200);
    document.addEventListener('keydown', handleKeyEvent);
  }
};