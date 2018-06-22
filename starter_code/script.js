 window.onload = function () {
   document.getElementById("start-button").onclick = function () {
     startGame();
   };
 }

 function startGame() {
  var ctx = document.getElementById('coche').getContext('2d');
   var canvas = document.getElementById("coche");
   var ctx = canvas.getContext("2d");

   function Pista() {
     this.pinta = function () {
       ctx.fillStyle = "#2b6020";
       ctx.beginPath();
       ctx.fillRect(0, 0, 20, 800);
       ctx.fillRect(480, 0, 500, 800);
       ctx.fillStyle = "#9e9999";
       ctx.fillRect(20, 0, 460, 800);
       ctx.fillStyle = "#ffffffff";
       ctx.fillRect(40, 0, 20, 800);
       ctx.fillRect(460, 0, -20, 800);
       ctx.beginPath();
       ctx.lineWidth = 5;
       ctx.strokeStyle = "white";
       ctx.setLineDash([15, 15]);
       ctx.moveTo(225, 0)
       ctx.lineTo(225, 800);
       ctx.stroke();
     }
   }

   function Coche(x, y) {
     this.x = x;
     this.y = y;
     this.maxSpeed = 2;
     this.sX = 0;
     this.img = new Image();
     this.img.src = "images/car.png";
   }

   Coche.prototype.moveLeft = function () {
     this.sX = -this.maxSpeed
   }
   Coche.prototype.moveRight = function () {
     this.sX = this.maxSpeed
   }
   Coche.prototype.stop = function () {
     this.sX = 0;
   }
   Coche.prototype.move = function () {
     this.x += this.sX;
   }
   Coche.prototype.draw = function (ctx) {
     ctx.drawImage(this.img, this.x, this.y, 50, 50);
   }
   Coche.prototype.notMove = function () {
     this.x += 0; ///////////////////////////?¿?¿?¿?¿
   }

   function Obstaculo() {
     this.x = Math.floor(Math.random() * 400);
     this.x2 = Math.floor(Math.random() * 400);
     this.y = 0;
     this.y2 = 20;
     this.maxSpeed = 2;
     this.sY = 1;
     this.form = function () {
       ctx.fillStyle = "#000000";
       if (this.x == 0) {
         this.x += 40;
         if (this.x + this.x2 > 440) {
           this.x2 -= 100
         }
       }
       if (this.x + this.x2 > 440) {
         this.x2 -= 100
       }
       ctx.fillRect(this.x, this.y, this.x2, this.y2);
     }
   }

   Obstaculo.prototype.moveDown = function () {
     this.sY = this.maxSpeed
   }
   Obstaculo.prototype.move = function () {
     this.y += this.sY;
   }
   Obstaculo.prototype.notMove = function () {
     this.y += 0; ///////////////////////////?¿?¿?¿?¿
   }


   var coche = new Coche(225, 750);
   var pista = new Pista();
   var obs = []
   var contador = 1;
   var puntos = 0;

   obs.push(new Obstaculo());

   function move() {
     coche.move();
   }

   function draw(ctx) {
     coche.draw(ctx);
   }


   document.onkeydown = function (e) {
     switch (e.keyCode) {
       case 37:
         coche.moveLeft();
         break;
       case 39:
         coche.moveRight();
         break;
     }
   }

   var refreshId=setInterval(function () {
     obs.push(new Obstaculo());
     contador++;
     if(contador>300){
      clearInterval(refreshId);
     }
   }, 3000);


   function updateCanvas() {
     ctx.clearRect(0, 0, 1500, 1700);
     pista.pinta();
     if (coche.x >= 410 || coche.x <= 40) {
       coche.stop();
       if (coche.x >= 410) {
         coche.x -= 2;
       } else {
         coche.x += 2;
       }
     } else {
       move();
     }
     draw(ctx);
     if (obs[0].y > 800) {
       obs.splice(0, 1);
       contador--;
     }
     if (obs[0].y >= 750 && obs[0].x < coche.x + 45 && (obs[0].x + obs[0].x2) > coche.x) {
       coche.stop();
       coche.maxSpeed = 0;
       for (i = 0; i < contador; i++) {
         obs[i].notMove();
         obs[i].form();
       }

     } else {
       for (i = 0; i < contador; i++) { //Tarda 13 segundos, añado los objetos cada 3 segundos
         obs[i].move();
         obs[i].form();
       }
       puntos++;
       ctx.fillText("Puntuacion :" + puntos / 100, 300, 700);
     }
     window.requestAnimationFrame(updateCanvas);
   }

   window.requestAnimationFrame(updateCanvas);
   ctx.font = ("bold 20px sans-serif");

 };