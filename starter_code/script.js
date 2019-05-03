window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    DrawGame.start("iRacer");
    // DrawGame.tankImage();
  };
  const DrawGame = {
    version: "0.4", //very alfa 4th iteration
    name: "iRacer",
    description: "race obstacle game",
    author: "Sachin",
    canvas: undefined,
    context: undefined,
    bord_W: undefined,
    bord_H: undefined,
    obs: [],
    timer: 0,

    start: function(id) {
      this.canvas = document.getElementById(id);
      this.context = this.canvas.getContext("2d");
      this.setEventListeners();
      this.setDimention();
      this.controlTank();
    },
    setDimention: function() {
      this.canvas.setAttribute("width", 700);
      this.canvas.setAttribute("height", 768);
      this.bord_H = 768;
      this.bord_W = 700;
    },
    // establece el layer z mas bajo de "hierbas"
    setGrassBackground: function() {
      this.context.fillStyle = "green";
      this.context.fillRect(0, 0, this.bord_W, this.bord_H);
    },
    setRoad: function() {
      this.context.fillStyle = "rgb(60, 60, 60)";
      this.context.fillRect(
        this.bord_W * 0.05,
        0,
        this.bord_W * 0.9,
        this.bord_H
      );
    },
    setRoadBorderL: function() {
      this.context.strokeStyle = "rgb(236, 236, 236)";
      this.context.lineWidth = 10;

      this.context.beginPath();
      this.context.moveTo(this.bord_W * 0.06 + 10, 0);
      this.context.lineTo(this.bord_W * 0.06 + 10, this.bord_H);
      this.context.stroke();
    },
    setRoadBorderR: function() {
      this.context.strokeStyle = "rgb(236, 236, 236)";
      this.context.lineWidth = 10;

      this.context.beginPath();
      this.context.moveTo(this.bord_W * 0.94 - 10, 0);
      this.context.lineTo(this.bord_W * 0.94 - 10, this.bord_H);
      this.context.stroke();
    },
    brokenLine: function() {
      this.context.strokeStyle = "rgb(236, 236, 236)";
      this.context.setLineDash([60, 30]);
      this.context.beginPath();
      this.context.lineDashOffset = this.velo;
      this.context.moveTo(this.bord_W / 2 - 5, 0);
      this.context.lineTo(this.bord_W / 2 - 5, this.bord_H);
      this.context.lineWidth = 10;
      this.context.stroke();
      this.context.setLineDash([0, 0]);
      this.vel -= 5;
    },

    controlTank: function() {
      this.obstacle = new Obstacle(this.context, this.bord_W, this.bord_H); //new obstaclesC(this.context, this.bord_H, this.bord_W)
      this.tank = new Tank(this.context, this.bord_W, this.bord_H);
      this.velo = 0;

      setInterval(() => {
        this.clear();
        this.setGrassBackground();
        this.setRoad();
        this.setRoadBorderL();
        this.setRoadBorderR();
        this.brokenLine();
        this.tank.draw();
        //this.obstaclesC,gap()

        if (this.timer > 100) {
          this.obs.push(
            (this.obstacle = new Obstacle(
              this.context,
              this.bord_W,
              this.bord_H
            ))
          );
          this.timer = 0;
        }
        this.obs.forEach(obst => {
          obst.update();
        });
        this.timer++;
      }, 1000 / 60);
    },

    clear: function() {
      this.context.clearRect(0, 0, this.bord_W, this.bord_H);
    },
    setEventListeners: function() {
      document.onkeyup = e => {
        if (e.keyCode === 37) this.tank.moveLeft();
        if (e.keyCode === 39) this.tank.moveRight();
      };
    }
  };
};

class Tank {
  constructor(context, bord_W, bord_H) {
    this.context = context;
    this.bord_W = bord_W;
    this.bord_H = bord_H;
    this.image = new Image();
    this.posX = this.bord_W / 2 - 60;
    this.vel = 10;
    this.image.src = "images/blue tank.png";
    /*this.randomXStart = Math.floor(
      Math.random() * (this.bord_W * 0.9 - this.bord_W * 0.05) +
        this.bord_W * 0.05
    );
    this.randomYStart;
    this.randomXEnd = Math.floor(
      Math.random() * (this.bord_W * 0.9 - this.bord_W * 0.05) +
        this.bord_W * 0.05
    );
    this.notRandomYEnd;*/
  }
  draw() {
    this.context.drawImage(
      this.image,
      this.posX,
      (this.bord_H * 3) / 4 - 60,
      120,
      120
    );
  }
  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel;
  }
  moveRight() {
    if (this.posX < this.bord_W - 120) this.posX += this.vel;
  }
}
class Obstacle {
  constructor(context, bord_W, bord_H) {
    this.bord_W = bord_W;
    this.bord_H = bord_H;
    this.bordW = this.randomNum(this.bord_W * 0.05, this.bord_W * 0.9);
    this.bordH = 30;
    this.context = context;
    this.posX = this.randomNum(100, 100);
    this.posY = 0;
    this.velocity = 5;
  }
  update() {
    this.context.fillStyle = "rgb(140, 30, 10)";
    this.context.fillRect(this.posX, this.posY, this.bordW, this.bordH);
    this.posY += this.velocity;
  }
  randomNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}
/*
class obstaclesC {
  //no funciona y no de porque
  constructor(context, bord_H, bord_W){
    this.context= context
    this.bord_H=bord_H
    this.bord_W=bord_W
    this.posY
  }
  // obstaculo que llena el width de la carretera y para dejar el espacio para el coche esta el gap
  obstacle(){
    this.context.fillStyle = "rgb(140, 30, 10)";
    this.context.fillRect(
    this.bord_W * 0.05,
    0,
    this.bord_W * 0.9,
    30
    );
  }
  console.log(obstacle())
  //espacio entre cada obstaculo, mide 2X width coche como minimo y la width de carretera como max
  gap(){
    this.context.fillStyle = "rgb(60, 60, 60)";
    this.context.fillRect(
    0,
    0,
    (Math.floor(Math.random()*(120-this.bord_W*.9)+120)),
    30)
  }
  //movimiento, empieza de ahltura maxima(bord_h) y va bajando posY -=5
  mov(){
    this.posY = this.bord_H
    this.posY -= 5
  }
  //----- copiado de Code Along - Basic Animations------

  // constructor(bord_H, bord_W) {
  //   this.width = bord_W;
  //   this.height = bord_H;
  //   this.color = "rgb(140, 30, 10)"
  //   this.x = lo pongo yo;
  //   this.y = lo pongo yo;
  //   // new speed properties
  //   this.speedX = 0;
  //   this.speedY = 0;
  }*/
