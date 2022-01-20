const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
let requestId;

// Sección de clases
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "images/road.png"
  }

  // Métodos
  draw() {
    this.y ++;
    if(this.y < +canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  gameOver() {
    ctx.font = "80px Century Gothic";
    ctx.fillText("Chocaste!!!", 150, 150);
  }
}

class Car {
  constructor( x, y, w, h ) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "images/car.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}



// Sección de Instancias
const fondo = new Background();
const carro = new Car(224, 620, 50, 80)


function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw()
  carro.draw()
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

function startGame() {
  if(requestId) return
  
  // requestedId = setInterval(updateCanvas, 1000 / 60);
  requestId = requestAnimationFrame(updateCanvas)

}
