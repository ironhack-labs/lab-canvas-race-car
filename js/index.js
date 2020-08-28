window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

//------------------------------------------------
const canvasId = document.getElementById('canvas')
const ctx = canvasId.getContext('2d')

const carImg = new Image()
carImg.src = "../images/car.png"
let carPosition = {x:220, y:560 }

function drawCar(){

  ctx.drawImage(carImg, carPosition.x, carPosition.y, 60, 110)
  setTimeout(drawCar, 50)

}

const cardRaceApp = {

  name:'Island Racer game',
  author: 'Cynthia Elizabeth Gorosito',
  version: '1.0.0',
  license: undefined,
  description: 'Canvas app',
  canvasId: undefined,
  ctx: undefined,
  canvasSize:{
    w:500 ,
    h:700
  },
  car: undefined,
  obstacles: undefined,
  

    init(id){

        this.drawBoard()
        drawCar()
        this.setEventListeners()

    },
    

    drawBoard (){

        //First Left-Green line
      ctx.fillStyle="green"
      ctx.fillRect(0, 0, 30, this.canvasSize.h)
  
        //Second Left-Grey line
      ctx.fillStyle="grey"
      ctx.fillRect(30, 0, 10, this.canvasSize.h)
  
        //Third Left-White line
      ctx.fillStyle="white"
      ctx.fillRect(40, 0, 15, this.canvasSize.h)
  
        //GREY LEFT 'BACKGROUND'
      ctx.fillStyle="grey"
      ctx.fillRect(55, 0, 191, this.canvasSize.h)
  
      //GREY RIGHT 'BACKGROUND'
      ctx.fillStyle="grey"
      ctx.fillRect(255, 0, 190, this.canvasSize.h)
  
      //Third Right-White line
      ctx.fillStyle="white"
      ctx.fillRect(445, 0, 15, this.canvasSize.h)
  
      //Second Right-Grey line
      ctx.fillStyle="grey"
      ctx.fillRect(460, 0, 10, this.canvasSize.h)
  
      //First Right-Green line
      ctx.fillStyle="green"
      ctx.fillRect(470, 0, 35, this.canvasSize.h)
  
      for(let i = 0; i <= 675; i=i+45){
        
        ctx.fillStyle="grey"
        ctx.fillRect(245, i, 15, 15)

      }

  },
  setEventListeners() {


},
  moveCar(direction){

    if (direction === 'right'){

      carPosition.x -= 5

    }
    if (direction === 'left'){
      
      carPosition.x -= 5

    }



  }


  
  /*  
  class Car {

    constructor(ctx, carPositionX, carPositionY, carWidth, carHeight,canvasSize,img){

      this.ctx = ctx
      this.carPosition = {

        x: carPositionX,
        y: carPositionY

      }

      this.carSize = {

        w: carWidth,
        h: carHeight
      }

      this.canvasSize = canvasSize
      this.img = img

      this.init()

    }
  }

*/



}




//CENTER LINE






/*

const cardRaceApp = {
    name:'Island Racer game'
    author: 'Cynthia Elizabeth Gorosito'
    version: '1.0.0'
    license: undefined
    description: 'Canvas app'
    canvasId: undefined
    ctx: undefined
    canvasSize:{
      w:500 ,
      h:700
    }
    car: undefined
    obstacles: undefined
  
    init(id){
      
      this.canvasId = id
      this.ctx = document.getElementById(this.canvasID).getContext('2d')

    }

   







}

*/