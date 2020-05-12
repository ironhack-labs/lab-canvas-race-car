const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var inicio;

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,

  inicializar: function () {
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "images/road.png";
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  },
  mostrar: function () {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, this.y - this.img.height, this.width, this.height);
    this.y += 1;
    if (this.y >= this.img.height) {
      this.y = 3;
    }
  }
};

const car = {

  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  speedX: 0,
  speedY: 0,
  misPuntos: 0,

  inicializar: function () {
    this.x = canvas.width / 2 - 50;
    this.y = canvas.height - 140;
    this.width = 80;
    this.height = 319 / 158 * this.width;
    this.img = new Image();
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.img.src = 'images/car.png';
  },


  movimiento: function () {
    this.x += this.speedX;
    if (this.x >= road.width - this.width) {
      this.x = road.width - this.width;
    }
    if (this.x <= 0) {
      this.x = 0;
    }
  },

  left: function () {
    return this.x;
  },

  right: function () {
    return this.x + this.width;
  },

  top: function () {
    return this.y;
  },

  bottom: function () {
    return this.y + this.height;
  },

  mostrar: function () {
    ctx.drawImage(this.img, this.x, this.y, 50, 319 * 50 / 158);
  },

  puntos: function () {
    this.misPuntos = Math.floor(frames / 20);
    ctx.font = "15px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + this.misPuntos, canvas.width - 400, 50);
  },

  choque: function (objeto) {
    return !(
      this.bottom() < objeto.top() || this.top() > objeto.bottom() || this.right() < objeto.left() || this.left() > objeto.right()
    );
  }
};

document.onkeydown = function (i) {
  switch (i.which) {
    case 37: car.speedX -= 2;
      break;
    case 39: car.speedX += 2;
      break;
  }
};

document.onkeyup = function (i) {
  car.speedX = 0;
  car.speedY = 0;
};

class Objeto {
  constructor(width, height, x, y, color){
    this.width= width;
    this.height= height;
    this.x= x;
    this.y= y;
    this.color=color;
    this.speedX=0;
    this.speedY=0;
  }

 mostrar() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  top(){
    return this.y;    
}
bottom(){
    return this.y + this.height;

}
right(){
    return this.x + this.width;

}
left(){
    return this.x;
}
}

var objetos = [];

let frames = 0;

function updateobjetos() {
  for (i = 0; i < objetos.length; i++) {
    objetos[i].y += 1;
    objetos[i].mostrar();
  }
  frames += 1;
  if (frames % 200 === 0) {
    var y = 0;
    var menosAncho = 20;
    var masAncho = 200;
    var width = Math.floor(
      Math.random() * (masAncho - menosAncho + 1) + menosAncho
    );
    var x = Math.floor(
      Math.random() * (masAncho - menosAncho + 1) + menosAncho
    );
    objetos.push(
      new Objeto (width, 20, x, y,"red"));
  }
}

function final() {
  var chocado = objetos.some(function (objeto) {
    return car.choque(objeto);
  });
  if (chocado) {
    console.log(chocado);
    cancelAnimationFrame(inicio);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", canvas.width*0.26, canvas.height*0.4);
    ctx.fillStyle = "yellow";
    ctx.fillText("Score: " + car.misPuntos + " puntos", canvas.width*0.25, canvas.height*0.5);
  }
}

function startGame() {
  road.inicializar();
  car.inicializar();
}

function actulaizarJuego() {
  road.mostrar();
  car.movimiento();
  car.mostrar();
  car.puntos();
  updateobjetos();
  inicio = requestAnimationFrame(actulaizarJuego);
  final();
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    actulaizarJuego();
    inicio = requestAnimationFrame(actulaizarJuego);
  };
};