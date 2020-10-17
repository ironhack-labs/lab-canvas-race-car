const ctx  = document.getElementById('canvas').getContext('2d');
const img = new Image();
img.src="./images/road.png";


//Carro 
const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src="./images/car.png";
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const car = new Car();

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38: car.moveUp();    console.log('up',    ghost); break;
    case 40: car.moveDown();  console.log('down',  ghost); break;
    case 37: car.moveLeft();  console.log('left',  ghost); break;
    case 39: car.moveRight(); console.log('right', ghost); break;
  }
  updateCanvas();
})

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("Ghost_x: " + ghost.x, 580,40);
  ctx.fillText("Ghost_y: " + ghost.y, 580,60);
  
  ghost.draw()
}

updateCanvas()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
