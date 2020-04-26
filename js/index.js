const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const camino = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  inicializar: function(){
    this.img = new Image();
    this.img.src = 'images/road.png';
    this.width = canvas.width;
    this.height = canvas.height;
    this.img.onload = this.dibujar();
  },
  dibujar: function(){
    ctx.drawImage(this.img, this.x, this.y, this.width,this.height);
  }
}

const auto = {
  img: null,
  x: parseInt(canvas.width) / 2 - 30,
  y: canvas.height / 2 + 160,
  speedX: 5,
  width: 0,
  height: 0,
  inicializar: function(){
    this.img = new Image();
    this.img.src = "images/car.png";
    this.width = 60;
    this.height = (319/158) * this.width;
    this.img.onload = this.dibujar();
  },
  dibujar: function(){
    ctx.drawImage(this.img, this.x, this.y, this.width,this.height);
  }
}


function update(){
  ctx.save();
  camino.dibujar();
  auto.dibujar();
  ctx.restore();
}

function checkTecla(event){
  if (event.code == "ArrowLeft" && auto.x >= 0){
    auto.x -= auto.speedX;
  }
  if (event.code == "ArrowRight" && auto.x + auto.width <= canvas.width) {
    auto.x += auto.speedX;
  }
  update();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.onkeydown = checkTecla;

  function startGame() {
    camino.inicializar()
    camino.dibujar();
    auto.inicializar();
    auto.dibujar();
  }
};
