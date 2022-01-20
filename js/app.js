const drawInApp = {
    appName: 'Island Racer game',
    author: 'Mario Díaz',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    
    init() {
        this.setContext()
        this.setSize()
        this.drawLinesRectan()
        this.createCar()
        this.car.init()
        this.drawAll()
        this.setEventHandlers()
        
        
       
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        
    },
    setSize() {
        this.gameSize = {
            w: 500,
            h: 700
        }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h)
    },
    drawLinesRectan() {
        //Rectángulo
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(25, 0, this.gameSize.w - 50, this.gameSize.h)
        // Líneas rectas
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()


        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w - 50, 0)
        this.ctx.lineTo(this.gameSize.w - 50, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        
        // Línea discontinua
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([40, 40])
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.setLineDash([0,0])
    },
    createCar() {
       this.car = new Car(this.ctx, (this.gameSize.w/2)-(60/2),this.gameSize.h -100,60,80)
    },
    drawAll () {
        setInterval(() => {
        this.ctx.clearRect(0,0,this.gameSize.w,this.gameSize.h)
        this.drawLinesRectan()
        this.car.draw()
        }, 70)
    },
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    }
}