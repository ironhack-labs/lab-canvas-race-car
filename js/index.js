const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const width = canvas.width
const heigth = canvas.heigth
let gameInterval
let frames =0
const obstacles = [] // Array de nuestros obstaculos

// Clase del tablero
class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.img = new Image();
    this.img.src = "/images/road.png";
  }
  //Metodo
  draw() {                         // si "y" es mayor o igual a la altura de canvas 
    if (this.y >= $canvas.height) this.y = 0; // pista se repita una y otra vez
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)//posicion incial  y  su posicion final
    ctx.drawImage(// añadir otra imagen para continuidad 
      this.img,
      this.x,
      this.y - canvas.height, //1-700(-699)
      this.width,
      this.height
    )
  }
}
//Clase del Carro
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 90;
    this.speed = 6;
    this.img = new Image();
    this.img.src = "/images/car.png";
  }

  //Metodos de la clase
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }

}
// Generar objetos:
class Component {
  constructor(width, height, color, x, y) { // parametros que crean el Component
    this.width = width
    this.height = height
    this.color = color
    this.x = x
    this.y = y

    //this.speedX = 0
    //this.speedY = 0

  }

  left() {
    return this.y
  }

  right() {
    return this.y + this.width
  }

  /*rashWith(obstacle) {

    // SI CUMPLE CUALQUIERA CON ESTAS CONDICIONES, ENTONCES, CHOCAMOS
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() || // CHOQUE CON LA PARTE SUPERIOR DEL CUADRADO ROJO HACIA LA PARTE INFERIOR DEL TUBO VERDE
      this.right() < obstacle.left() || // CHOQUE CON LA PARTE LATERAL DERECHA DE MI CUADRADO ROJO HACIA EL LATERAL IZQUIERDO CON EL OBSTÁCULO
      this.left() > obstacle.right() // CHOQUE CON LA PARTE LATERAL IZQUIERDA DE MI CUADRADO ROJO HACIA EL LATERAL DERECHO DE MI OBSTÁCULO
    )
  }*/


  update() {
    ctx.fillStyle = this.color //color rojo
    ctx.fillRect(this.x, this.y, this.width, this.height)// pinta
  }

  newPos() {
    this.x += this.speedX //
    this.y += this.speedY // 0
  }

}
//Instancias 
const board = new Board()
const car = new Car(215, 600)


//Motor del juego
function updateGame() {
  //limpiar el canvas
  clearCanvas(); //llamar la funcion 
  board.draw();
  car.draw();//lamar la funcion para que la dibuje
  updateObstacles(); // actualiza obstaculos

//UpdateObstacle

}

//Carga del juego
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


};

// Listener de presion de teclas
document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
    default:
  }
};

//FUNCIONES AUXILIARES
function startGame() {
  console.log("Game Start")
  if (gameInterval) return;
  gameInterval = setInterval(updateGame, 1000 / 60)// El iterador de nuestro juego
  //set interval va actualizando nuestro juego
}
/**
 * Limpiar Canvas
 */
 function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}


function updateObstacles() {
  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].y++ // pq  van a ir ir bajando hacia posicion y ,no de x positivo a x negativo 
    obstacles[i].update(); // lo pinta con el nuevo valor de i
  }
  //obstaculos 
       frames += 1;  // espacio entre un objeto y otro 
    if (frames % 120 === 0) { 
    let x = $canvas.width;
    let minWidth = 20; 
    let maxWidth = 200;
    let width =Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth); // dif tipos de width 
    obstacles.push(new Component(width, 70, 'red', 70, 0));// crea un nuevo componente
  }                              // width,heigth,color,x,y

}