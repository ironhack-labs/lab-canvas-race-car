const drawingApp = {
canvasDOM: undefined,
/** @type {CanvasRenderingContext2D} */
ctx: undefined,
description: '.......',
author: 'Alejandro Caballero',
car: undefined,
canvasSize : {
    w: undefined,
    h: undefined,
},
keys: {
    left:'ArrowLeft',
    right: 'ArrowRight'

},

init(id) {
    this.canvasDOM = document.querySelector(`#${id}`)
    this.ctx =this.canvasDOM.getContext ('2d')
    this.setDimensions()
    this.addEventListener()
    this.drawAll()
    
},
setDimensions() {
    this.canvasSize = {
        w: 500,
        h: 700,
    }
    this.canvasDOM.setAttribute('width', this.canvasSize.w)
    this.canvasDOM.setAttribute('height', this.canvasSize.h)
},



drawFilledRectangle() {
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(0,0,500,700)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0,0,20,700)
    this.ctx.fillRect(485,0,20,700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(25,0,5,700)
    this.ctx.fillRect(475,0,5,700)
},

drawLines() {
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash ([50, 10])
    this.ctx.moveTo (this.canvasSize.w / 2, 0)
    this.ctx.lineTo (this.canvasSize.w / 2, this.canvasSize.h )
    this.ctx.stroke()

},

showImage (imageName) {
    let imageInstance = new Image ()
    imageInstance.src = `images/${imageName}`
    this.ctx.drawImage(imageInstance, 215,550,70,115)
    
},




addEventListener() {
    document.onkeypress= e => {
        if (e.key === this.keys.left) {
            this.car.move(-10)
        }
        if (e.key === this.keys.right) {
            this.car.move(10)
        }
    }
},


drawAll() {
    setInterval(() => {
        this.clearScreen()
        this.drawFilledRectangle()
        this.drawLines()
        this.showImage('car.png')
        
    }, 70)
},
clearScreen(){
    this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)

},

move(distance){
    this.move += distance
}

}