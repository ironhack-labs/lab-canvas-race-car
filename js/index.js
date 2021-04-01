const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const road = new Image()
road.src = 'images/road.png'

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {
    ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
    car.renderImage();
  }
};


class Car {
  constructor(){
    this.img = ''
    this.width = 45
    this.height = 90
    this.x =ctx.canvas.width/2 -25
    this.y = ctx.canvas.height -90
    this.direction = ''
  }
  renderImage() {
    this.img = new Image()
    this.img.src = 'images/car.png'
    this.img.onload = ()=>{
      this.drawSelf()
    }
  }

  drawSelf() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

}

const car = new Car()

