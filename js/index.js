// TRAER VAIABLES PARA PODER UTILIZAR EL CANVAS
const canvas = document.querySelector('canvas') //---> Trae mi canvas para poder utilizarlo.
const startBtn = document.querySelector('button')//---> Traemos el botn para poder utilizarlo.
const ctx = canvas.getContext('2d')//---> Nos permite empezar a trabar con el canvas en 2D

//----Variables Globales
let frames = 0
let obstacles = [] 



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    update()
  }
};


//todo------------------------CLASS------------------------//

class Background {
  constructor(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = "/images/road.png"
  }

  draw (){
  this.y ++ //--> Esto desplza en el eje "y" a la imagen para simular que la carretera se mueve
  if(this.y > +canvas.height){this.y = 0}

  
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    // Se coloca otro draw Image con otro valor para fondo infinito
    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height)



  }
}

class Car {
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 30
    this.height = 65
    this.move = 25
    this.image = new Image()
    this.image.src = "/images/car.png"
  }

  draw (){

    // Formula para que el carr solamente pueda ser maneobrado en la carretera.
    this.x;
      if (this.x > canvas.width - this.width - 30)
        this.x = canvas.width - this.width - 30;
        if (this.x < 40)
        this.x = 40;  
    
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }

  moveLeft() {
    this.x -= this.move;
  }
  moveRight() {
    this.x += this.move;
  }

  isTouching(obj) {
    return (
      this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y
    );
  }
}

class Obstacle extends Car {
  constructor(x,y){
    super(x,y)
    this.width = 150
    this.image.src= "/images/obstacle.png.png"
  }

  draw(){
    this.y+=2;
        if (this.x > canvas.width - this.width - 60)
        this.x = canvas.width - this.width - 60;
        if (this.x < 60)
        this.x = 60;  
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}






const background = new Background()
const car = new Car(230,625)




//todo------------------------FUNCTIONS------------------------//

function checkKeys() {
  document.onkeydown = (event) => {
    switch (event.key) {
      
      case "ArrowLeft":
        car.moveLeft();
        break;
      case "ArrowRight":
        car.moveRight();
        break;

      default:
        break;
    }
  }
}


function randoomObstacles(){

  if(frames % 150 === 0){
    const x = Math.floor(Math.random()*380);
    const obst= new Obstacle(x,0);
    obstacles.push(obst)

  }  
}

function drawObstacles(){
  obstacles.forEach((obst)=> obst.draw());

}

function checkCollitions(){
  obstacles.forEach((obs)=>{
    if(car.isTouching(obs)){
        alert("Game Over");
    }
  })
}



//todo------------------------------------------------//
function update(){ //---> Esta funcion es la que estara actualziadnoe el juego
frames++
checkKeys()
randoomObstacles()
checkCollitions();

ctx.clearRect(0,0,canvas.width,canvas.height)//--> Con esto quitamos el efecto de fondo corrido para que se limpie una vez que haya alcanzado el canvas width y canvas height.


background.draw()
car.draw()
drawObstacles()
requestAnimationFrame(update)//==> EJECUTA 60 FREAMES POR SEGUNDO
}





