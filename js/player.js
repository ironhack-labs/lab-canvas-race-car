class Player {
 constructor(){
   this.posX = 250
   this.posY = 600
   this.speed = 5
 }

  draw(){
    console.log('car')
    const car = new Image()
    car.src = './images/car.png'
    ctx.drawImage(car,this.posX,this.posY,50,80)
  }

  move(key){
    switch(key){
    case "ArrowLeft":
      this.posX -= this.speed
      break;

    case "ArrowRight":
      this.posX += this.speed
      break;

    case "ArrowUp":
      this.posY -= this.speed
      break;

    case "ArrowDown":
      this.posY += this.speed
      break;
    }
  }
}
