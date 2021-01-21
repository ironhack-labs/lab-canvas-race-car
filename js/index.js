window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

//objeto raceCarApp -----
  const raceCarApp = {
    name: `Race Car App`,
    description: `Canvas Game`,
    author: `Abel Andrés`,
    vesrion: `1.0.0`,
    license: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },


    init(id) {
      this.canvasDOM = document.querySelector(`#${id}`)
      console.log(this.canvasDOM)
      this.ctx = this.canvasDOM.getContext('2d')
      this.setDimensions()
      
    },
    setDimensions() {
      this.canvasSize = {
        w: 500,
        h: 700        
      }
      // this.canvasDOM.setAttribute('width', this.canvasSize.w)
      // this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    drawFilledRectangle() {
      
      this.ctx.fillStyle = '#808080'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      
      this.ctx.fillStyle = '#3e8317'
      this.ctx.fillRect(0, 0, 40, this.canvasSize.h)
      this.ctx.fillStyle = '#3e8317'
      this.ctx.fillRect(this.canvasSize.w - 40, 0, 40, this.canvasSize.h)
      
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(this.canvasSize.w - 450, 0, 20, this.canvasSize.h)
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(this.canvasSize.w - 70, 0, 20, this.canvasSize.h)
    },

    drawLine() {
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = `#ffffff`
      this.ctx.setLineDash([40, 40])
      this.ctx.moveTo(this.canvasSize.w / 2, 0)
      this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.stroke()      
    }
}







//motor del juego-----
  function startGame() {
    
  raceCarApp.init('canvas')
  raceCarApp.setDimensions()
  raceCarApp.drawFilledRectangle()
  raceCarApp.drawLine()


    
  }
};


// 1-funcion arranque con tamaño

// 2-funcion para pintar rectangulo

// metodos del juego
