  const Game = {
    car: undefined,
    winW: undefined,
    winH: undefined,
    ctx: undefined,
    canvas:undefined,
    lines: [],
    frameCounter: 0,

    init: function(id){

      this.canvas = document.getElementById(id)
      this.ctx = this.canvas.getContext("2d")
      this.canvas.width = 500
      this.canvas.height = window.innerHeight * .96
      this.drawBackground()
      this.car = new Car(300,300,50,100,this.ctx)
      this.start()
    },

    start: function(){

      this.restart() 

      this.interval = setInterval(() => {   
        
          this.frameCounter ++             
        if(this.frameCounter > 1000) {   
          this.frameCounter = 0
        }
  
        if(this.frameCounter % 200 == 0) { 
          this.generateLines()       
        }

        this.clear()
        this.drawBackground()
        this.car.draw()
        this.lines.forEach(line => line.draw()) 
        this.car.move()
        this.clearLines()       
     
      
      }, 1000/this.fps)

    },

    restart: function(){
      this.car = new Car(300,300,50,100,this.ctx)
      this.lines = []
    },

    drawBackground: function(){

      let ctx = this.ctx;
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      ctx.fillStyle = 'gray';
      ctx.fillRect(90, 0, 300, this.canvas.height);

      ctx.fillStyle = 'white';
      ctx.fillRect(75, 0, 25, this.canvas.height);

      ctx.fillStyle = 'white';
      ctx.fillRect(375, 0, 25, this.canvas.height);
     
      ctx.lineWidth = '2'
      ctx.strokeStyle = 'white';
      ctx.setLineDash([20, 20]);
      ctx.beginPath();
      ctx.moveTo(this.canvas.width / 2, 0);
      ctx.lineTo(this.canvas.width / 2, this.canvas.height);
      ctx.stroke();

    },

    clear:function(){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    generateLines: function(){
      console.log('entro')
      this.lines.push(new Component(this.ctx)) 
    },

    clearLines: function(){
      this.lines.forEach((lin, idy) => {
      if(line.y > this.canvas.height)  {this.lineas.splice(idy, 1)}  
      })
    },

  }

