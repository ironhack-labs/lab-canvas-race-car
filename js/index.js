const canvasBoard = document.querySelector('#canvas')
const ctx = canvasBoard.getContext('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    bg.draw()
    blueCar.draw()
  };

  function startGame() {}
};


// clase para el background
class Backgroung{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height

    this.image = new Image()
    this.image.src = 'images/road.png'
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
}

// clase para carros
class Car{
  constructor(x,y){
    this.x = x
    this.y = y
    this.w = 40
    this.h = 85

    this.image = new Image()
    this.image.src = 'images/car.png'
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
  }
}


addEventListener('keydown', event => {
  if (event.keyCode === 37 ){
    blueCar.x -= 30
  }
  if (event.keyCode === 39){
    blueCar.x += 30
  }
})



//37 izqueirda 39 derecha
const bg = new Backgroung()
const blueCar = new Car(230,600)

