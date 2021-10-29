const startGame ={
  
  name: 'race car',
  description: 'car in the hell road',
  version: '1.0.0',
  author: 'JM Sanchez Diezma',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
    
  },

  init() {
    this.setContext()
    this.drawRoad()  
    this.setListeners()
    this.start()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  drawRoad() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, 420, 700)
    this.drawLine()
    this.drawLineDash()
    this.obstacle()
  },

 

 



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame.init();
  };
};
