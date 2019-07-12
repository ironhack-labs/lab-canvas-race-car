// 3 aqui se hace todo lo que hara el juego 

let Game = {
  canvas: undefined,
  ctx: undefined,         //el contexto son los dibujos que vamos a meter en el canvas
  player: undefined,
  fps: 60,
  x: undefined,
  y: undefined,

  
// 4 Init prepara el entorno del videojuego, el canvas y demas
  init : function (id){
    this.canvas = document.getElementById(id)  // 5 desde aqui cojemos el canvas por la id que le hemos dado en el HTML
    this.ctx = this.canvas.getContext('2d')     //6 esto hace que nuestro canvas sea en 2D
    this.canvas.width = window.innerWidth / 2   // 7 le damos un ancho al canvas (la mitad del ancho de la pantalla)
    this.canvas.height = window.innerHeight     //   le damos un alto al canvas ()<todo el alto de la pantalla o del div donde esté
    this.player = new Player (this.ctx, this.ctx, this.y)
    this.start()

  },

// 8 inicia el juego y hace todo lo que hay en las funciones que tiene dentro
  start: function() {
    this.interval = setInterval(() => { 
      this.drawBackground()         // 10 aqui meteremos todas la funciones que creemos
      this.drawRoad()
      this.drawLline()
      this.drawRline()
      this.drawCline()
      this.player.showCar()
      this.player.movePlayer()            
    }, 1000/this.fps)
  },

  

  drawBackground: function (){   // 9 aquie creamos una imagen y metemos la funcion en el netodo star
    this.ctx.fillStyle = 'green'    //11 aqui le damos el estilo de las formas y deben de ir siemprea antes de dibujar los objetos
    this.ctx.fillRect(0,0, 500, 500)  //12 aqui va la posicion desde la que se inicia, donde termina y el tamaño
  },

  drawRoad: function(){
    this.ctx.fillStyle = 'grey'
    // x incial/ y inicial/ x final/ y final
    this.ctx.fillRect(50, 0, 400, 500)
  },

  drawLline: function (){
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    //    parte de arriba del eje X/ parte de arriba del eje Y
    this.ctx.moveTo(54, 0)
    //    parte de abajo eje X/ parte de abajo eje Y
    this.ctx.lineTo(54, window.innerHeight)
    this.ctx.stroke()  // con esto se dibuja la linea en el canvas, sino no sale en la pantalla
  },

  drawRline: function(){
    this.ctx.strokeStyle='white'
    this.ctx.lineWidth=10
    this.ctx.moveTo(440, 0)
    this.ctx.lineTo(440, window.innerHeight)
    this.ctx.stroke()
  },

  drawCline(){
    this.ctx.strokeStyle='white'
    this.ctx.lineWidth=10
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250, window.innerHeight)
    this.ctx.stroke()
  }
  


}





