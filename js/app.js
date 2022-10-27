const app = {
    appName: 'Mi primer juego en canvas',
    version: '1.0.0',
    license: undefined,
    author: 'Víctor Moreno',
    description: 'un juego de coches que salva obstaculos',
    canvasSize: {
        w: 500, h: 700
    },
    imageInstance: undefined,
    ctx: undefined,
    dataCar: {
        pos: { x: 50, y: 550 },
        size: { w: 100, h: 100 },
        image: 'images/car.png'
    },
    /* framesCounter: 0,
     obstacle: {
         pos: { x: 50, y: 550 },
         size: { w: 100, h: 100 }
     },*/


    init() {
        this.setContext()
        this.drawRoad()
        this.createImgCar()
        this.star()
        this.setEventHandlers()
    },

    /*setDimension() {
        this.canvasSize = { w: 500, h: 700 }
        document.querySelector('#Canvas').setAttribute('height', this.canvasSize.h)
        document.querySelector('#Canvas').setAttribute('width', this.canvasSize.w)
    },*/
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },

    drawRoad() {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w - 70, 0, 10, this.canvasSize.h)
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createImgCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.dataCar.image
    },
    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.dataCar.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.dataCar.pos.x += 10
                    break;
            }
        }
    },

    star() {
        setInterval(() => {
            //      this.framesCounter++

            //      if (this.framesCounter % 120 === 0) {
            //        this.drawObstacle()
            //  }
            this.clearAll()
            //       this.moveAll()
            this.drawAll()
        }, 50);
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        //     this.obstaculs.forEach(elm => elm.createObstacle())
    },

    drawCar() {
        this.ctx.drawImage(
            this.imageInstance,
            this.dataCar.pos.x,
            this.dataCar.pos.y,
            this.dataCar.size.w,
            this.dataCar.size.h
        )
    },
    /* moveAll() {
         this.obstaculs.forEach(elm => elm.move())
     },
     drawObstacle() {
         this.ctx.beginPath()
         this.ctx.fillStyle = 'green'
         this.ctx.fillRect(0, 0, 200, 100)
         this.ctx.closePath()
     },
     move() {
 
         if (this.obstacle.pos.x >= this.canvasSize.w - this.obstacle.ize.w) {
             this.obstaculsSpeed *= -1
         }
 
         if (this.obstaculsPos.x < 0) {
             this.obstaculsSpeed *= -1
         }
 
         this.obstaculsPos.x += this.obstaculsSpeed
     }
 */
}