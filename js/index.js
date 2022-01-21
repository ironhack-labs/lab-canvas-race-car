const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
const muros = [];
let requestId;
let score = 0;

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
    if(this.y > +canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    )
  }

  gameOver() {
    ctx.fillStyle = "black"
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
    // if(frames % 10 === 0) {
    //   this.x -= 5;
    // }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  collision(item) {
    return(
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    )
  }
}

class Wall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = canvas.width - 200
    this.height = 50
  }
  draw() {
    ctx.fillStyle = '#870007'
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if (frames % 10 === 0) {
      this.y += 10;
    }
  }
}
// Sección de Instancias
const fondo = new Background();
const carro = new Car(224, 620, 50, 80);


function generarMuros() {
  if(frames % 200 === 0) {
    let x = Math.floor(Math.random() * (140 - 10)) + 40;
    const muro = new Wall(x, 0)
    muros.push(muro)
  }
}

function pintarMuros() {
  muros.forEach((muro, index) => {
    muro.draw()
    if(carro.collision(muro)) {
      requestId = undefined;
      fondo.gameOver()
    }
    if(muro.y - muro.height > canvas.height) {
      muros.splice(index, 1)
      score++;
    }
  })
}

function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw()
  carro.draw()
  generarMuros()
  pintarMuros()
  generarScore()

  if(requestId) {
    requestId = requestAnimationFrame(updateCanvas)
  }
}

function generarScore() {
  score = Math.round(frames / 32)
  ctx.fillStyle = "black"
  ctx.font = '32px Century Gothic';
  ctx.fillText(`Score: ${score}`, 20, 670);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

function startGame() {
  requestId = requestAnimationFrame(updateCanvas)
}
addEventListener('keydown', (event) => {
  // Izquierda
  if(event.keyCode === 37){
    if(carro.x > 10){
      carro.x -=15  
    }
  }
  // Derecha
  if(event.keyCode === 39) {
    if(carro.x < 435) {
      carro.x += 15
    }
  }
  // Arriba
  if(event.keyCode === 38) {
    carro.y -= 15
  }
  // Abajo
  if(event.keyCode === 40) {
    carro.y += 15
  }
})
