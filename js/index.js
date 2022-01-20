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

// Sección de Instancias
const fondo = new Background();


function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw()
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
