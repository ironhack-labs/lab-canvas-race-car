//Paso 1: Conectando el Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var txt = document.getElementById('canvas').getContext("2d");


//Paso 2: Creando variables 
let walls = [];
let frames = 0;
let wallCounters = 0;
let requestId = 1;


//Paso 3: Clase para generar Background
class createBackground {
  constructor (x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width; 
    this.height = height;
    this.image = new Image();
    this.image.src = img;
  }
  draw () {    //Paso 2.1 Method para dibujar 
    this.y += 6; //hace que el fondo se mueva hacia abajo
    if (this.y > canvas.height) this.y=0 //resetea 0 para mantener imagen infinita 
    ctx.drawImage(this.image, this.x,this.y, this.width,this.height) //creamos elemento (road o car)
    ctx.drawImage(this.image, this.x, this.y - canvas.height, this.width,this.height) //creamos segundo mapa para movimiento
    return; 

  }

  collition(enemyWalls) {        //Validando colision
      return(
          this.x < enemyWalls.x + enemyWalls.w &&
          this.x + this.width > enemyWalls.x  &&
          this.y < enemyWalls.y + enemyWalls.h &&
          this.y + this.height > enemyWalls.y 
      )
  } 
};

//Paso 4: Creador de Obstaculos 
class obstaculos {
  constructor () { 
    this.x = Math.random() * (canvas.width - 250);; 
    this.y = 0;
    this.w = Math.random() * (canvas.width - 250);;
    this.h = 30;
  }
  drawObs () {
    this.y += 10;
    wallCounters++;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h); 
    
    //dibujando puntaje: 
    txt.font = "70 px American Captain";
    txt.fillStyle = "red";
    txt.fillText(`Tu puntaje es ${wallCounters}`, 400, 50)
   }
}

//Paso 5: Clase con Inherencia para crear carro
class creaCar extends createBackground{
  draw () {
    ctx.drawImage(this.image, this.x,this.y, this.width,this.height)
  }
}

//Paso 6: Variables que me activan las clases

const newRoad = new createBackground(0, 0, canvas.width, canvas.height, "./images/road.png");
const newCar = new creaCar(225, 600, 50, 70, "./images/car.png");


//Paso 7: Activador del boton a traves del DOM
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  startGame();
  }


// Paso 8: Funcion stargame  y Update  
function startGame () {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  newRoad.draw();
  newCar.draw();
  generateWalls();
  drawWalls();
  
  if(!requestId){ 
    gameOver()
    }else{
    requestId =  requestAnimationFrame(startGame)
}

}
};

// Paso 9: Validando tecla presionada por usuario
addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37: newCar.x -= 60;  //Desplanzado a la Izquierda validando limite de mapa
      if (newCar.x < 40) newCar.x = 40; break; 
    case 39: newCar.x += 60; //Desplanzado a la Derecha validando limite de mapa
      if (newCar.x > 420) newCar.x = 420; break; 
  }
})

// Paso 10: Creando Obstaculos

generateWalls =()=> {
    if(frames % 100 == 0 || frames % 60 == 0 || frames % 170 == 0){
      let enemyWalls = new obstaculos(); // se va para la clase a crear un enemigo 
      //se hace push para guardarlo en push
      walls = [...walls,enemyWalls] 
    }
  }

// Paso 11: Dibujando Obstaculos  
drawWalls=()=>{
    walls.forEach((enemyWalls)=>{ 
      enemyWalls.drawObs()
      if(newCar.collition(enemyWalls)) gameOver()    //valida estrellada
    })
}


// Paso 12: Informando Game Over
gameOver=()=>{
  requestId = undefined;
  txt.fillText(`Game Over, your final scores is ${wallCounters}`, 200, 400);
}
