/*----Main app----*/

const carGame = {
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    car: undefined,
    keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
    },
    blocks: [],
    frames: 0,
    randomIndex: undefined,
    

    init() {
        this.canvasDOM = document.querySelector('canvas')
        this.ctx = this.canvasDOM.getContext('2d')

        mainRoad.ctx = this.ctx
        mainRoad.canvasDOM = this.canvasDOM
        mainRoad.init()

        this.setEventListeners()

        this.createCar()
        this.drawAll()
        this.createBlocks()
        
    },

    setEventListeners() {
        document.onkeydown = e => {
            if (e.key === this.keys.left) {
                this.car.move(-30)
            }
            if (e.key === this.keys.right) {
                this.car.move(30)
            }
        }
    },

    createCar() {
        this.car = new Car (this.ctx, this.canvasSize, this.canvasSize.w / 2 -35, this.canvasSize.h - 160, 70, 140)
    },

    createBlocks() {
        const block1 = new Block (this.ctx, this.canvasSize, 60, 0, 150, 30)
        

        this.blocks.push(block1)

    },

    obstacleRandomnessX(){
        const randomXPosArr = []
        for (let i = 60; i <= 290; i++){
            randomXPosArr.push(i)
        }
        return randomXPosArr
    },

    obstacleRandomnessW(){
        const randomWArr = []
        for (let i = 150; i <= 250; i++){
            randomWArr.push(i)
        }
        return randomWArr
    },

    
    createObstacle() {
        
        const block = new Block (this.ctx, this.canvasSize, this.obstacleRandomnessX()[Math.floor(Math.random()*this.obstacleRandomnessX().length)], 0, this.obstacleRandomnessW()[Math.floor(Math.random()*this.obstacleRandomnessW().length)], 30)
        this.blocks.push(block)
   
    },

    removeObstacle() {
        this.blocks.shift()
    },

    drawAll() {
        const intervalId = setInterval(() => {
            this.clearScreen()
            mainRoad.init()                   //para que salga la carretera cada vez que se limpia
            this.car.drawCar()
            this.frames++
            if (this.frames % 90 === 0) {
                this.createObstacle()
                this.removeObstacle()
            }
            this.blocks.forEach(elm => elm.drawBlock())  
            
            this.blocks.forEach(elm => {
                if (elm.blockPos.x + elm.blockSize.w > this.car.carPos.x && this.car.carPos.x + this.car.carSize.w > elm.blockPos.x && elm.blockPos.y + elm.blockSize.h > this.car.carPos.y){
                    clearInterval(intervalId)
                    this.gameOversquare()                   
                }
            })
        }, 34)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    gameOversquare() {
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 300)
        this.ctx.fillStyle = "white"
        this.ctx.font = '30px sans-serif'
        this.ctx.fillText('Game Over', this.canvasSize.w / 2 - 80, this.canvasSize.h / 2 - 50, 300)
    }
    

     
    

    
}

/*----Drawing Main Road----*/

const mainRoad = {
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: carGame.canvasSize,


    init() {
        this.drawRoadSides()
        this.drawMainRoad()
        this.drawCentralLine()
    },

    /*----Green and Grey parts on the side of the road (left and right)----*/
    drawRoadSides() {
        this.ctx.fillStyle = "#008200" 
        this.ctx.fillRect(0, 0, 30, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-30, 0, 30, this.canvasSize.h)
        this.ctx.fillStyle = "#808080"
        this.ctx.fillRect(30, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-40, 0, 10, this.canvasSize.h)
    },

    /*----Central grey background----*/
    drawMainRoad() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0 , 400, this.canvasSize.h)
        
    },

    /*----Central dashed line----*/
    drawCentralLine() {
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash ([40, 20])
        this.ctx.lineWidth = 10
        this.ctx.stroke()
    }
    
}


/*----CAR----*/
class Car {
    constructor(ctx, canvasSize, posX, posY, width, heigth) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: width,
            h: heigth
        }
        this.imageName = 'car.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`

    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(distance) {
        this.carPos.x += distance
    }    
}


/*----BLOCKS----*/
class Block {
    constructor(ctx, canvasSize, posX, posY, width, heigth) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.blockPos = {
            x: posX,
            y: posY
        }
        this.blockSize = {
            w: width,
            h: heigth
        }
    }
    drawBlock() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
        this.move()
    }

    move() {
        this.blockPos.y += 8
    }
}