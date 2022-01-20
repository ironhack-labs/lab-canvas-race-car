
const drawingRoad = {

    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    car: undefined,

    init() {

        this.setContext()
        this.setSize()
        this.drawRoad()
        this.createCar()
        setInterval(() => {
            this.drawAll()
        }, 70);

    },

    setContext() {

        this.ctx = document.querySelector('#canvas').getContext('2d')
        
    },

    setSize() {

        this.gameSize = {

            w: 500,
            h: 700
        }
        

    },

    createCar(){

        this.car = new Car(this.ctx, 200, 600, 120)


    },

    drawAll(){

        this.ctx.clearRect(0, 0,this.gameSize.w, this.gameSize.h) 
        this.drawRoad()
        this.car.draw()
        
    },

    drawRoad() {

        this.drawGreenRoad()
        this.drawGrayRoad()
        this.drawExteriorLine()
        this.drawCenterLine()
                       
    },

    drawGrayRoad() {

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(20, 0, this.gameSize.w - 40, this.gameSize.h)
       
    },

    drawGreenRoad(){

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        
    },
    

    drawExteriorLine(){

        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 12, 0)
        this.ctx.lineTo(this.gameSize.w / 12, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w - 42, 0)
        this.ctx.lineTo(this.gameSize.w - 42, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

      
    },

    drawCenterLine(){
        
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, 0)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    }
}