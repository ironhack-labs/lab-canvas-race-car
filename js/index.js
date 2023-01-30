window.onload = () => {
  //cuando haya cargado window ejecuta código

  const LIMITE_IZQ = 65;
  const LIMITE_DER = 385;

  class Coche {
    constructor() {
      this.x = 225;
      this.y = 600;
      this.w = 50;
      this.h = 90;
      this.vel = 10;
      this.imgCoche = new Image();
      this.imgCoche.src = "images/car.png";
    }
    print(ctx) {
      ctx.drawImage(this.imgCoche, this.x, this.y, this.w, this.h);
    }
    moveIzq() {
      this.x -= this.vel;
      if(this.x < LIMITE_IZQ) this.x = LIMITE_IZQ;
    }
    moveDer() {
      this.x += this.vel;
      if(this.x > LIMITE_DER) this.x = LIMITE_DER;
    }
  }
  class Obstaculo {
    constructor(canvas) {
      this.y = -40;
      this.w = Math.floor(Math.random()*((LIMITE_DER-LIMITE_IZQ)/2 - 100)) + 100;
      this.x = Math.floor(Math.random()*(canvas.width - this.w));
      this.h = 40;
      this.vel = 10;
      this.color = "red";
    }
    print(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    move() {
      this.y += this.vel;
    }
  }
  class Juego {
    constructor() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.roadImg = document.createElement("img");
      this.roadImg.src = "images/road.png";
      this.coche = new Coche();
      // this.obstaculo = new Obstaculo();
      this.obstaculos = [];
      this.score = 0;
      this.intervalId = undefined;
      this.iteracion = 0;
    }
    start() {
      // if(!this.intervalId) {
      if(this.intervalId == undefined) {
        this.intervalId = setInterval(()=>{
          this.iteracion ++;
          //borra
          this.clear();
          //recalcula + genera obstaculos
          this.recalculate();
          //pinta
          this.print();
        }, 20);
      }
    }
    stop() {
      if(this.intervalId) clearInterval(this.intervalId);
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    print() {
      console.log(this.ctx);
      //fondo
      this.ctx.drawImage(this.roadImg, 0, 0, this.canvas.width, this.canvas.height);
      //coche
      this.coche.print(this.ctx);
      //obst
      this.obstaculos.forEach(obstaculo => {
        obstaculo.print(this.ctx);
      });
    }
    recalculate() {
      if(this.iteracion == 70) {
        //creo obstaculo
        let obstaculo = new Obstaculo(this.canvas);
        //lo añado al array
        this.obstaculos.push(obstaculo);
        this.iteracion = 0;
      }

      //recorro array obstaculos:
      this.obstaculos.forEach(obstaculo => {
          //cambio posiciones
          obstaculo.move();
          //controlo colisiones
          if(!( this.coche.x + this.coche.w < obstaculo.x || 
            this.coche.x > obstaculo.x + obstaculo.w || 
            this.coche.y > obstaculo.y + obstaculo.h ||
            this.coche.y + this.coche.h < obstaculo.y) ) {
              this.stop();
            }
      })
    }
  }

  let juego = new Juego();

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    juego.start();
  }

  // document.body.addEventListener()
  document.getElementsByTagName("body")[0].addEventListener("keydown", (event)=>{
    switch(event.key) {
      case "ArrowLeft":
        juego.coche.moveIzq();
        break;
      case "ArrowRight":
        juego.coche.moveDer();
        break;
    }
  });
};
