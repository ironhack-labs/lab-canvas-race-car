const $canvas = document.querySelector("#canvas");
const ctx = $canvas.getContext('2d');
const allObstacles = []
let frames = 0;

//creamos la clase del camino
class Road{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.image = new Image();
    this.image.src = "../images/road.png";
  }  
  //generamos su metodo para dibujarlo
  draw(){
    this.y+=3;
    if(this.y > this.height)this.y = 0;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x, 
      this.y - this.height,
      this.width, 
      this.height); 
  }
}

//Creamos la clase del cochecito
class Car{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.width=50;
    this.height=100;
    this.image=new Image();
    this.move=10;
    this.image.src="../images/car.png"
   }
    //generamos el metodo draw para dibujarlo y posicionarlo en medio del camino
   draw(){
    if(this.x > $canvas.width -this.width-40){
      this.x = $canvas.width -this.width-40
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
   }

   moveLeft(){
     this.x -= this.move;
   }
   moveRight(){
    this.x += this.move;
  }
  
  moveUp(){
    this.y -= this.move;
  }
  moveDown(){
   this.y += this.move;
 }

 isTouching(obj) {
  return (
    this.x <= obj.x + obj.width &&
    this.x + this.width > obj.x &&
    this.y < obj.y + obj.height &&
    this.y + this.height > obj.y
  );
}
 

}
//Dibujamos los obstaculos

class Obstacles extends Car{
  constructor(x,y, ancho, largo){
    super(x,y, ancho, largo);
    this.width = Math.floor(Math.random()*400);
    this.height = 30;
  }
  
  draw(){
    this.y+=3;
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const elCamino = new Road();
const elCochecito = new Car(200,600);

//verificamos el choque
function choque() {
	allObstacles.forEach((obstaculo) => {
		if (elCochecito.isTouching(obstaculo)) {
			alert("Moriste");
      window.location.reload();
		}
	});
}

//aqui generamos los obstaculos
function generaObstaculos() {
	if (frames % 90 === 0) {
		const x = Math.floor(Math.random() * 250);
		const obstaculo = new Obstacles(x, 0);
		allObstacles.push(obstaculo);
	}
}
//aqui dibujamos los obstaculos y empujamos uno por uno 
function drawObstacles() {
	allObstacles.forEach((obstacle) => obstacle.draw());
}

function startGame() {
 //incluimos intervalo para actualizar los frames
  //  setInterval(()=>{
    update();
  // }, 1000/60);
}

function update(){
  frames++;
  controlers();
  generaObstaculos();
  choque();
  
  ctx.clearRect(0,0, $canvas.height, $canvas.width);
  elCamino.draw();
  elCochecito.draw();
  drawObstacles();
  requestAnimationFrame(update);
  
}

function controlers(){
  document.onkeydown = (evento) =>{
    //evento.preventDefault();
    switch (evento.key){
      case "ArrowLeft":
				elCochecito.moveLeft();
				break;
			case "ArrowRight":
				elCochecito.moveRight();
				break;
      case "ArrowUp":
          elCochecito.moveUp();
          break;
      case "ArrowDown":
          elCochecito.moveDown();
          break;  

			 default:
				break;
    }
  }
}

window.onload = () => { 
document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
