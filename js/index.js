const canvas = document.getElementById(`canvas`)
const ctx = canvas.getContext(`2d`)

const carretera = new Image()
carretera.src = `/images/road.png`

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    coche.renderImage()
    ctx.drawImage(carretera,0,0,ctx.canvas.width,ctx.canvas.height)
  }
};

class Car {
      constructor(){
        this.img = ``
        this.width = 50
        this.height = 80
        this.x = ctx.canvas.width/2 - 25
        this.y = ctx.canvas.height - 120
        this.direction = ``
    }

renderImage(){
  this.img = new Image()
  this.img.src = `/images/car.png`
  this.img.onload = ()=>{
      this.drawSelf()
  }
}
drawSelf(){
  /* console.log(`hola`) */
  ctx.drawImage(this.img,this.x,this.y,this.width, this.height)
}
moveRight(){
  this.x +=1
}

moveLeft(){
  this.x -=1
}
}

const coche = new Car()

coche.renderImage()

