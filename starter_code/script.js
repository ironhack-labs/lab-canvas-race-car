const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let interval
let frames = 0
let obstacles = []


class Background {
  constructor (){
    this.y = 0
    this.x = 0
    this.width = canvas.width
    this.height = canvas.height
    }
  

  draw() {
    //street and grass

    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, 45, 600)

    ctx.fillStyle = "grey"
    ctx.fillRect(45, 0, 10, 600)

    ctx.fillStyle = "white"
    ctx.fillRect(55, 0, 10, 600)

    ctx.fillStyle = "grey"
    ctx.fillRect(65, 0, 370, 600)

    ctx.fillStyle = "white"
    ctx.fillRect(435, 0, 10, 600)

    ctx.fillStyle = "grey"
    ctx.fillRect(445, 0, 10, 600)

    ctx.fillStyle = "green"
    ctx.fillRect(455, 0, 45, 600)

    //middle lines
    
    ctx.fillStyle = "white"
    ctx.fillRect(247,5, 3, 135)

    ctx.fillStyle = "white"
    ctx.fillRect(247,150, 3, 135)

    ctx.fillStyle = "white"
    ctx.fillRect(247,305, 3, 135)

    ctx.fillStyle = "white"
    ctx.fillRect(247,455, 3, 135)

    //img 
    const image = new Image();
    image.src = "./images/car.png"
    image.onload = function(){ctx.drawImage(image, 220, 500, 75, 100)}
    //ctx.drawImage(image, 220, 520, 20, 20)
  }
}


class Car {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.sx = 0
      this.sy = 0
      this.width = 70
      this.height = 100
      this.image = new Image()
      this.image.src = "./images/car.png"
      this.imgage.onload = () => {
        ctx.drawImage(image, 220, 500, 75, 100)
        //this.draw()
      }
    }
    /*moveCar(keyCode){
      if (this.x > canvas.width - 100) {return} else{
      if (typeof keyCode === "number"){
        if(keyCode === 39) /*right*/ /*{
          this.x += 10
          this.move()
          } else if (keyCode === 37) /*left*//* {
            this.x -= 10
            this.move()
          }else {
            return 
        } 
        }
      }
    }*/
    goRight() {
      if (this.x > canvas.width - 100) return
      this.x += 10
      this.move()
    }
    goLeft() {
      this.x -= 10
      this.move()
    }
    move(){
      this.sx += 10
    }
  }



 
 



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};


function startGame() {
    let bg = new Background()
    bg.draw()
}

  


