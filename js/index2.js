const controlledApp = {
    name: 'Controlled forms app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas app to manually control forms on the browser',
    canvasId: undefined,
    ctx: undefined,
    ball: undefined,
    frames: 0,
    obstaclesDensity: 20,
    canvasSize: {
        w: 220,
        h: 560
    },
    init(id) {
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.setDimensions()
        this.setEventHandlers()
        this.setEventListeners()
        this.drawBall('car.png')
        this.drawBoard ()
        console.log('Así es el objeto de renderizado 2D', this.ctx)        // <= El objeto de renderizado bidimensional
    },

    drawBall(imageName) {
        this.ball = new Ball(this.ctx, 220,560,60,110, this.canvasSize, imageName)
        setInterval(() => {
            this.frames++
            this.frames % this.obstaclesDensity === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.ball.draw()
        }, 50)
    },

    generateObstacle() {
        console.log("AHI TE VA! CUIDAO'")
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.ball.move('left') : null
            e.keyCode === 39 ? this.ball.move('right') : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}

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
}  



class Ball {
    constructor(ctx, posX, posY, ballW, ballH, canvasSize, imageName) {
        this.ctx = ctx
        this.ballPos = {
            x: posX,
            y: posY
        }
        this.ballSize = {
            w: ballW,
            h: ballH
        }
        this.canvasSize = canvasSize
        this.imageName = imageName

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move(dir) {
        dir === 'left' ? this.ballPos.x -= 5 : null
        dir === 'right' ? this.ballPos.x += 5 : null
    }
}