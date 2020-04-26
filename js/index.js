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
  speedX: 6,
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

const obstaculos = {
  obstaculos: [],
  fps: 0,
  crear: function(){
      let unObstaculo = {
        x: 0,
        y: 0,
        height: 15,
        width: 0,
      }
      unObstaculo.x = (Math.random() * canvas.width);
      unObstaculo.width = (Math.floor(Math.random() * canvas.width * 0.30)) + auto.width;
      this.obstaculos.push(unObstaculo);
  },
  dibujar: function(){
    this.obstaculos.map(obstaculo => {
      obstaculo.y += 3;
      return obstaculo;
    });
    this.obstaculos.forEach(obstaculo => {
      ctx.save();
      ctx.fillStyle = 'rgb(128,0,64)';
      ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.width, obstaculo.height);
      ctx.restore();
    });
  }
}


function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  camino.dibujar();
  auto.dibujar();
  obstaculos.dibujar();
  requestAnimationFrame(update);
}

//Mover el auto
function moverAuto(event){
  if (event.code == "ArrowLeft" && auto.x >= 0){
    auto.x -= auto.speedX;
  }
  if (event.code == "ArrowRight" && auto.x + auto.width <= canvas.width) {
    auto.x += auto.speedX;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    setInterval(() => {
      obstaculos.crear()
    }, 1500);
  };
  document.onkeydown = moverAuto;
  function startGame() {
    requestAnimationFrame(update);
  }
  camino.inicializar();
  auto.inicializar();
};
