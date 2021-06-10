const gameApp = {
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: 500, h: 700 },
 
 Init() {
     this.setContext()
     this.setDimensions()
     this.drawBackground()
 },

 setContext(){
     this.canvasDOM = document.querySelector ('#canvas')
     this.ctx= this.canvasDOM.getContext ('2d')
 },
  setDimensions(){
      this.canvasDOM.setAttribute('width', this.canvasSize.w)
      this.canvasDOM.setAttribute('width', this.canvasSize.h)

 },
 drawBackground(){
     this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(70, 0)
    this.ctx.lineTo(70, 700)
    this.ctx.moveTo(430, 0)
    this.ctx.lineTo(430, 700)
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250, 50)
    this.ctx.moveTo(250, 75)
    this.ctx.lineTo(250, 125)
    this.ctx.moveTo(250, 150)
    this.ctx.lineTo(250, 200)
    this.ctx.moveTo(250, 225)
    this.ctx.lineTo(250, 275)
    this.ctx.moveTo(250, 300)
    this.ctx.lineTo(250, 350)
    this.ctx.moveTo(250, 375)
    this.ctx.lineTo(250, 425)
    this.ctx.moveTo(250, 450)
    this.ctx.lineTo(250, 500)
    this.ctx.moveTo(250, 525)
    this.ctx.lineTo(250, 575)
    this.ctx.moveTo(250, 600)
    this.ctx.lineTo(250, 650)
    this.ctx.moveTo(250, 675)
    this.ctx.lineTo(250, 700)
    this.ctx.stroke()
    this.ctx.closePath()

  },

    }