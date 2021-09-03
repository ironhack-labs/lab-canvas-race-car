const $canvas= document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let gameInterval
//CLases del juego
let frames=0
class Board{
  constructor(){
    this.x=0;
    this.y=0;
    this.width=$canvas.width;
    this.height=$canvas.height;
    this.img = new Image();
    this.img.src="/images/road.png";
    
   
  }
  
draw(){
//comparar si la x es menor al ancho del canvas
//Si  y es mayor o = a canvas.hei
if(this.y>= $canvas.height) this.y=0;
this.y++
//Pintamos la imagen, determinamos que imagen es, luego ponemos su posicion inciial en x,y y despues donde queremos que termine en este caso todo el ancho y largo del canvas por que quermeos que ocupe todo el espacio  
ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
//La imagen se mueve
ctx.drawImage(
this.img,
this.x,
this.y- $canvas.height,
this.width,
this.height
);
}
frames(){
  frames=0
}

}

// Clase del coche
class Carrito {
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=70;
    this.height=90;
    //darle el movimiento
    this.speedX=0;
    this.speedY=0
    this.img=new Image();
    this.img.src="/images/car.png";
  }
//Metodos del coche

draw(){
  //LO vamos a pintar
  //que empiece desde la posicion x y, y termine hasta
  ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}
moveLeft(){
  return this.x
}

moveRight(){
  return this.x +this.width
}

newPos(){
  this.x+=this.speedX
  this.y+=this.speedY
}
left() {
  return this.x
}

right() {
  return this.x + this.width
}

top() {
  return this.y
}

bottom() {
  return this.y + this.height 
}
crashWith(obstacle) {

  // SI CUMPLE CUALQUIERA CON ESTAS CONDICIONES, ENTONCES, CHOCAMOS
  return !(
      //this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() || // CHOQUE CON LA PARTE SUPERIOR DEL CUADRADO ROJO HACIA LA PARTE INFERIOR DEL TUBO VERDE
      this.right() < obstacle.left() || // CHOQUE CON LA PARTE LATERAL DERECHA DE MI CUADRADO ROJO HACIA EL LATERAL IZQUIERDO CON EL OBSTÁCULO
      this.left() > obstacle.right() // CHOQUE CON LA PARTE LATERAL IZQUIERDA DE MI CUADRADO ROJO HACIA EL LATERAL DERECHO DE MI OBSTÁCULO
  )
}


 

}
//GENERACION DE OBSTACULOS
class Component {
  constructor(width, height, color, x, y){
      this.width      = width
      this.height     = height
      this.color      = color
      this.x          = x
      this.y          = y
      this.speedX     = 0
      this.speedY     = 0

  }
 
  
  update() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)

}


}

//Instancias

const board=new Board();
const coche= new Carrito(215,600);

function checkGameOver () {
  // SI UNO DE LOS VALORES REGRESA CON TRUE, ENTONCES SE DEVUELVE TRUE. SI NINGUNO, ABSOLUTAMENTE NINGUNO, CUMPLE, ENTONCES DEVUELVE FALSE
  const crashed = myObstacles.some((obstacle) => {
      return coche.crashWith(obstacle)
  })

 // console.log("crashed", crashed)
  if(crashed) {
     clearInterval(gameInterval)
  }

}


//Motor del juego
function updateGame(){
clearCanvas()
board.draw()
coche.newPos()
coche.draw()
updateObstacles()
checkGameOver() 

}



//FUNCIONES AUXILIARES


function clearCanvas(){
  ctx.clearRect(0,0,$canvas.width,$canvas.height)
}


const myObstacles=[];

/**/
function updateObstacles(){
//ESte ciclo va entrar a cada eleemento del arreglo y lo va a pintar apartir del obstauclo

for(i=0; i <myObstacles.length; i++){
myObstacles[i].y +=  +1
//Aqui pintmaos el obstaculo
myObstacles[i].update()

}
console.log(frames)
frames +=1;
if(frames%120===0){

  let canvasWidth = Board.width
  let canvasHeight= Board.height

  //EStablecemos el tamano del obstaculo rojo
  let minHeight=100
  let maxHeight=600
  let height      = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight )
    // ESTABLECEMOS EL ESPACIO DE SEPARACIÓN VERTICAL ENTRE LOS TUBOS
    let minGap      = 50
    let maxGap      = 300
    let gap         = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)
       // AGREGAR LOS OBSTÁCULOS A UN ARREGLO
        // 1. TUBO VERDE SUPERIOR       x   y             x     y
        myObstacles.push(new Component(height, 10, "red", height, 10))

        // 2. TUBO VERDE INFERIOR
        myObstacles.push(new Component(-height, 10, 'purple', gap,100))
        
        
}

// REVISA EL GAME OVER


}


//
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
//Para que el juego comience en un intevalo al momento de dar click en start
  function startGame() {
    gameInterval = setInterval(updateGame,1000/60)
  }
};

//EVENTOS DEL JUGADOR

document.addEventListener("keydown",(e)=>{
  switch(e.key){
  case "ArrowRight":
    coche.speedX+=1;
    break;
  case "ArrowLeft":
    coche.speedX-=1
    break;


  }
  

})

document.addEventListener("keyup",(e)=>{
  coche.speedX=0
})


//VOY EN AGREGAR LOS OBSTACULOS