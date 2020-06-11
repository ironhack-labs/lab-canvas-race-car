 window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    startGame();
   }

};
  function startGame() {race.init('canvas')
};

const race = {
    name: 'Island Race',
    description: 'Car Race Ga,e',
    version: '1',
    authors: 'Laura Martinez y Elena Sánchez',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700,
    },
    carW : 50,
    carH : 100,
    posX : undefined,
    frames: 0,
    car : undefined,
    obstaclesArr : [],

    init(id){

      this.canvasDom = document.getElementById(id),
      this.ctx = this.canvasDom.getContext('2d'),
      this.drawFilledSquares(),
      this.drawLine(),
      this.drawCar('car.png'),
      this.setEventListeners()
      this.obstaclesGeneration()
      this.obstacleMovement()
  
    },



    
    drawFilledSquares() {

      this.ctx.fillStyle = 'green',
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h),
      this.ctx.fillStyle = '#808080',
      this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
      this.ctx.fillStyle = 'white',
      this.ctx.fillRect(70, 0, 12 , this.canvasSize.h),
      this.ctx.fillRect(this.canvasSize.w-82, 0, 12 , this.canvasSize.h)
    },

    drawLine(){

      this.ctx.beginPath(),
      this.ctx.strokeStyle = 'white',
      this.ctx.lineWidth = 8,
      this.ctx.moveTo(this.canvasSize.w / 2 - 4, 0),
      this.ctx.lineTo(this.canvasSize.w / 2 - 4, this.canvasSize.h),
      this.ctx.setLineDash([40, 30]),0
      this.ctx.stroke()
    },

    drawCar(name) {
      this.car = new Car(this.ctx, name, this.canvasSize.w / 2 - 28, this.canvasSize.h - 120, this.carW, this.carH,  this.canvasSize);
      this.car.initCar(),
      setInterval(() => {
        this.frames ++
        this.cleanScreen(),
        this.obstaclesArr.forEach(elem => {  
          
            elem.drawObstacle();
          })
        this.car.draw()
      }, 20)
    
    },


    setEventListeners() {

      document.onkeydown = e => {
          e.keyCode === 37 ? this.car.move('left') : null
          e.keyCode === 39 ? this.car.move('right') : null
      }

    },

    cleanScreen() {

      this.ctx.clearRect(this.drawFilledSquares(), this.drawLine(), this.canvasSize.w, this.canvasSize.h)

   },
   
    obstaclesGeneration(){

      setInterval(()=>{
        let newObstacle = new Obstacles(this.ctx, this.canvasSize.h)
        this.obstaclesArr.push (newObstacle)
        this.obstaclesArr.forEach(elem => elem.obstacleInit())
      },500)
    },

    obstacleMovement () {
      setInterval (()=> this.obstaclesArr.forEach(elem => elem.moveObstacle())
       , 2000)
      
    }

};


class Car {
    
    constructor (ctx, name, posX, posY, carW, carH, canvasSize){
    this.ctx = ctx,
    this.name = name,
    this.posX = posX,
    this.posY = posY,
    this.carW = carW,
    this.carH = carH,
    this.canvasSize = canvasSize
    this.car = undefined;
    }

  initCar() {
    this.car = new Image()
    this.car.src = `images/${this.name}`;
  }

  move(dir) {

    if(dir === 'left' && this.posX >= 80){
    this.posX -= 3
    }
    else if (dir === 'right' && this.posX <= this.canvasSize.w - 130){
    this.posX += 3
    }
    else{
      null
    }

  }

  draw() {
    this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
  }

  
}



class Obstacles {

    constructor (ctx, canvasSizeh){
      this.ctx = ctx
      this.maxWidth = 150
      this.minWidth = 80
      this.posX = Math.random() * this.maxWidth + this.minWidth220
      this.posY = 0
      this.obstacleW = Math.random()*this.minWidth*2
      this.obstacleH = 25
      this.canvasSizeh = canvasSizeh

    }
    

    obstacleInit () {
      this.drawObstacle();

    }

    drawObstacle(){
      this.ctx.fillStyle = '#89230E',
       
      this.ctx.fillRect(this.posX, this.posY, this.obstacleW , this.obstacleH )

    }


    moveObstacle () {
      
        this.posY += 20
      
    }


}
