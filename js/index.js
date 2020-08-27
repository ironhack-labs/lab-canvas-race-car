
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
          startGame();
        };
      
     function startGame() {
        raceCar.init('canvas')
        //console.log('HOLA')
        }
      };

const raceCar = {
    name: 'Canvas Race',
    author: 'Ana Bermúdez',
    version: '1.0.0',
    license: undefined,
    description: 'racing car game',
    canvasId: undefined, 
    ctx: undefined,
    car: undefined,
    canvasSize :{
        w: 500,
        h: 700
    },
    

    init(id){
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.canvasId.w = this.canvasSize.w
        this.canvasId.h = this.canvasSize.h
        this.drawRoad()
        //console.log('HOLA ESTOY PROBANDOOO')
        this.drawImage('car.png')
        //this.moveCar()
        //this.setEventListeners()
        
    },

    drawRoad(){

       this.ctx.lineWidth = 60
       this.ctx.strokeStyle = 'green'
       this.ctx.strokeRect(10, 10, this.canvasSize.w -20, this.canvasSize.h -20)
       //console.log('probando drawroad')

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0,this.canvasSize.w - 80, this.canvasSize.h)

        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.strokeRect(60 , 0, this.canvasSize.w -120, this.canvasSize.h)


        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(66, 0,this.canvasSize.w - 130, this.canvasSize.h)

        //He dado mil vueltas para conseguirlo, seguro que había una opción mas sencilla 

        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([20,50])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.closePath()
        this.ctx.stroke()

    },

    drawImage(name) {
        let image = new Image()
        image.src = `images/${name}`
        image.onload = () => this.ctx.drawImage(image, 220, 580, 60, 100)
        // const car1 = new Car (this.ctx, 220, 580, 60, 100, this.canvasSize, 'car.png')
        //this.car.init()
        // setInterval(() => {
        // this.clearScreen()
        // car1.draw()
        // }, 50)
    
    // },

    // moveCar(direction) {
    //     direction === 'left' ? this.carPos.x -= 5 : null
    //     direction === 'right' ? this.carPos.x += 5 : null

    // },

    // setEventListeners(){

    // document.onkeydown = e => {
    //      e.keyCode === 37 ? this.moveCar('left') : null
    //      e.keyCode === 39 ? this.moveCar('right') : null
    //     }
    // },

    // // clearScreen(){
    // //     this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    // // }
    }

}

    
// class Car {

//     constructor(ctx, posX, posY, carW, carH, canvasSize, imgName /*speed*/ ) {
//        this.ctx = ctx
//        this.carPos = {
//            x: posX,
//            y:posY
//        }
//        this.carSize = {
//             w: carW,
//             h: carH
//        }
//        this.canvasSize = canvasSize
//        this.imgName =imgName
//        this.imageInstance = undefined
//        /*this.speed = speed*/
//        this.init()
       
//    }
 
//    init() {
//      this.imageInstance = new Image()
//      this.imageInstance.src = `images/${this.imageName}`
//    }
 
//    draw() {
//      image.onload = () => this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
//    }
 
 
//    move(direction) {
       
//        if(direction === 'left'){
//            this.carPos.x -= 5
//            this.car.draw()
 
//        } else if (direction === 'rigth'){
//            this.carPos.y +=5
//            this.car.draw()
 
//        } else {
//            return null
//        }
//    }    
 




 