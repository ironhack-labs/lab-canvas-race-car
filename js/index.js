const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const road = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  obstacles: [],
  score: 0,

  inicializar: function () {
    this.img = new Image();
    this.img.src = "/images/road.png";
    this.width = canvas.width;
    this.height = canvas.height;
  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.x, this.y - canvas.height, this.width, this.height);
  },

  createObstacle: function () {
    road.obstacles.forEach(function (el) {
      el.moverObstaculo();
    });
    let obst = new Obstaculo();
    road.obstacles.push(obst);
    car.updateCanvas()
  },

  score: function(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Score: "+ this.score, 350, 50);
  },

}

const car = {
  img: new Image(),
  x: 300,
  y: 500,
  width: 0,
  height: 0,
  speed: 15,

  inicializar: function () {
    this.img = new Image();
    this.img.src = "/images/car.png";
    this.width = 50;
    this.height = 100;
  },

  mostrar: function () {
    car.updateCanvas()
  },

  trataEventoTeclado: function (evento) {
    console.log(evento);
    if (evento.code == "ArrowRight" && this.speed <= 500) {
      this.x += this.speed;
    }
    if (evento.code == "ArrowLeft") {
      this.x -= this.speed;
    }
    this.updateCanvas();
  },

  updateCanvas: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road.mostrar();
    road.obstacles.forEach(function (el) {
      el.dibujarObstaculo();
    });
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }, 

  colision: function (){
  }
}

class Obstaculo {
  constructor() {
    this.x = Math.floor(Math.random() * 300)+50;
    this.y = 0;
    this.width = Math.floor(Math.random() * 200) + 50;
    this.height = 25;
    this.vel = 150;
  }

  dibujarObstaculo() {
    ctx.fillStyle = '#8A1515';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moverObstaculo() {
    this.y += this.vel;
  }
}

function actualizar() {
  road.inicializar();
  car.inicializar();
  car.mostrar();
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {  
    startGame();
  };

  function startGame() {
    setInterval(function () { road.createObstacle() }, 3000);
    actualizar();
  }

  document.onkeydown = function (event) {
    car.trataEventoTeclado(event);
    if (car.x <= 50 || car.x >= 420) {
      car.speed = -car.speed
    }
  }

};
