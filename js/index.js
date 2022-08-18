const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const road = new Image();
road.src = './images/road.png';
let intervaId = undefined



// ACTUALIAZAR PANTALLA

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    intervaId = setInterval(() => {
      remove()
      drawbg()
      player.drawPlayers()
    }, 20);
  };
}


// EMPEZAR EL JUEGO


function startGame() {
  drawbg()
  player.drawPlayers()
}


// CONSTRUIR PLAYER


class players {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }

  drawPlayers() {
    const car = new Image();
    car.src = './images/car.png';
    ctx.drawImage(car, this.x, this.y, 50, 100)
    console.log()
  }

  moveLeft() {
    if (this.x > 0)
      this.x -= 10
  }

  moveRigth() {
    if (this.x < 450)
      this.x += 10
  }

  moveUp() {
    if (this.y > 0)
      this.y -= 10
  }

  moveDown() {
    if (this.y < 600)
      this.y += 10
  }
}

const player = new players(250, 600);



// PINTAR EL LIENZO

function drawbg() {
  ctx.drawImage(road, 0, 0, 500, 700)
}




// MOVIMIENTO TECLAS

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': // left arrow
      player.moveLeft();
      break;
    case 'ArrowRight': // right arrow
      player.moveRigth();
      break;
    case 'ArrowUp':
      player.moveUp();
      break;
    case 'ArrowDown':
      player.moveDown();
      break;
  }
});



// BORRAR PANTALLA

function remove() {
  // ctx.clearRect(0, 0, 500, 700);
}
