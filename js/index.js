window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

};

// imagenes
const roadImg = new Image();
roadImg.src = "../images/road.png";

const carImg = new Image();
carImg.src = "../images/car.png";

//Seleccionar canvas

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Lista de enemigos y otros elementos

const obstacles = []

//  ------------- CLASSES --------------------------

//    CAR -------------------> 

class Car {
  constructor(x, y, w, h, vida, imagen) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.vida = vida;
      this.imagen = imagen;
      
      
  }
  derecha(){
      // LIMITE DE AVANCE DER.
      if(this.x + this.w < 350){
          this.x += 30; //PASO
      }
      
  }
  izquierda(){
      //  LIMITE DE AVANCE IZQ.
      if(this.x > 30){
          this.x -= 30;
      }
      
  }
  dibujarse(){
      ctx.drawImage(this.imagen, this.x, this.y, this.w, this.h);
  }
  score(){

    this.vida += 1

  }
  

}

// ENEMY ------------->   Obstacle

class Obstacle extends Car {
  constructor(x, y, w, h) {
      super(x, y, w, h);
  }
  dibujarse() {
      ctx.fillStyle = "brown";
      ctx.fillRect(this.x, this.y, this.w, this.h);
      
      // const num = Math.floor(Math.random() * 5); // genera num. aleatorios
      this.y += 4;
  }
}

//  RENDER ROAD

function dibujarFondo() {
  ctx.drawImage(roadImg,0, 0, 400, 570);
}

//PANTALLA LOOSE

function pantallaLose(vida) {
  //DIFUMINA AREA DE JUEGO
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, 400, 570);
  
  //Estilo
  ctx.fillStyle = "red";
  ctx.font='bold 40px Arial';  
  //TEXTO
  ctx.fillText(`Game Over !`, 90, 200);

  //Estilo
  ctx.fillStyle = "white";
  ctx.font='bold 40px Arial';
  //TEXTO
  ctx.fillText(`Your Final Score`, 50, 300);
  ctx.fillText(`${vida}`, 150, 350);
};

//  RENDER SCORE

function dibujarScore(vida) {
  //Estilo
  ctx.fillStyle = "white";
  ctx.font='20px Arial';
  //TEXTO
  ctx.fillText(`Score:${vida}`, 60, 30);
  
}


// LISTEN KEYS //////////////////////////////////////

function teclas(micho) {
  //Recibimos un evento
  document.addEventListener("keyup", (evento) => {
    switch (evento.code) {
      case "ArrowRight":
        micho.derecha();
        break;
      case "ArrowLeft":
        micho.izquierda();
        break;
    };
  });
};

//   CREAR ENEMIGOS ///////////////////////////

function createObstacle(){
  const num = Math.floor(Math.random() * 50); // genera num. aleatorios
  const num2 = Math.floor(Math.random() * 230); // genera num. aleatorios para el eje X
  const num3 = Math.floor(Math.random() * 100); // genera num. aleatorios para el eje X
  if (num === 3 && num2 > 30 && num3 > 50){
      const obstacle = new Obstacle (num2, 0, num3, 20,);
      obstacles.push(obstacle); // Envia un elemento al array rotten
  };
};




function startGame() {

  const car = new Car(180, 480, 40, 70, 0, carImg)
  teclas(car)

  // HERE IS RENDERED THE GAME
  idInterval = setInterval(() => {
    //BORRAR AREA DE JUEGO
    ctx.clearRect(0, 0, 400, 570);

    dibujarFondo();

    dibujarScore(car.vida);

    car.dibujarse();
    car.score();

     // DIBUJAR OBSTACULOS
     obstacles.forEach((obstacle, index) => {
      obstacle.dibujarse();
      if(
          obstacle.y + obstacle.h >= car.y // Impacto sup.
          && obstacle.x + obstacle.w >= car.x // Impacto lat. izq.
          && obstacle.x <= car.x + car.w  //  Impacto lat. der.
          && obstacle.y + obstacle.h <= car.y + car.h //lim. inf.
          )  

      {
      
          obstacles.splice(index, 1);
          clearInterval(idInterval); //ACTIVAR CUANDO SE COLOQUE EL BOTON START
          pantallaLose(car.vida);
          
      };


      

      
  });

  //RENDER OBSTACLE
  createObstacle();

  }, 1000 / 30);


}
