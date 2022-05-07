const canvasBoard = document.querySelector('#canvas')
const ctx = canvasBoard.getContext('2d')
let requestId;
const rectangulos = []
let scoreNumber = 0


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    updateScore();
  };
  
  function startGame() {
    update()
  }
};

//clase para el background
class Background{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.w = canvas.width;
    this.h = canvas.height

    this.image = new Image()
    this.image.src = 'images/road.png'
  }
  draw(){
    this.y ++;
    if(this.y > +canvas.height){this.y = 0}
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h)

    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.h,
      this.w,
      this.h
    )
  }
}

//clase para carros
class Car{
  constructor(x,y){
    this.x = x
    this.y = y
    this.w = 70
    this.h = 130

    this.image = new Image()
    this.image.src = 'images/car.png'
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
  }
}

//clase para bloques


//controles del carro
addEventListener('keydown', event => {

  if (event.keyCode === 37 && blueCar.x > 50){
    blueCar.x -= 35
  }
  if (event.keyCode === 39 && blueCar.x < 380){
    blueCar.x += 35
  }
})

//invocando objetos de las clases
const bg = new Background()
const blueCar = new Car(215,550)

//motor del juego 
function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  bg.draw()
  blueCar.draw()
  score()
  requestAnimationFrame(update)
}

//score
function score(){
  ctx.fillStyle = 'beige'
  ctx.font = '40px Arial'
  ctx.fillText(`Score ${scoreNumber}`,67,60)
  
}

//updating score
function updateScore(){
  setInterval(() => {
    scoreNumber += 1
  }, 400);
}

