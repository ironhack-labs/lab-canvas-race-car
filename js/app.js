const roadCarApp = {
  appName: "Road Car app",
  author: "Gustavo del Llano",
  version: "1.0.0",
  license: undefined,
  gameSize: { w: 500, h: 745 },
  ctx: undefined,
  car: undefined,
  obstacle:undefined,
  frameIndex: 0,
  obstArr:[],
  
  init() {
    this.setContext();
    this.setSize();
    
    this.drawGreenRectangle();
    this.drawGrayRectangle();
    this.drawSideLines()
    this.drawInLine();
    this.createCar()
    this.drawAll()
    this.setEventHandlers()

  },

  setContext() {
    this.ctx = document.querySelector("#canvas").getContext("2d");
  },
  setSize() {
    
    document.querySelector("#canvas").setAttribute("width", this.gameSize.w);
    document.querySelector("#canvas").setAttribute("width", this.gameSize.w);
  },

  createRandomObst() {
    this.obstacle = new Obstacle(this.ctx, Math.random() * 500, 0, Math.random() * 600, 60, 10)
    return this.obstArr.push(this.obstacle)
  },

  

  createCar() {
    this.car = new Car(this.ctx, 225, 550, 50, 100)
  },
  

  drawAll() {
    setInterval(() => {
      
      this.clearAll()
      this.drawGreenRectangle();
      this.drawGrayRectangle();
      this.drawSideLines();
      this.drawInLine();
      this.obstArr.forEach(element => {
        element.draw()
        element.move()
      });
      this.frameIndex++;
      this.frameIndex % 50 === 0 ? this.createRandomObst() : null;
      this.car.draw()
      console.log(this.obstArr)
        }, 40)
  },
  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
            
        })
    },
  
    
  
  // drawRandomObst() {
  //    this.ctx.fillStyle = "red";
  //    this.ctx.fillRect(Math.random() * 500, 0, Math.random() * 400, 60);
    
  //  },
  





  drawGreenRectangle() {
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0,0, this.gameSize.w, this.gameSize.h)
  },
  drawGrayRectangle() {
    this.ctx.fillStyle = "gray"
    this.ctx.fillRect(25,0, 450, this.gameSize.h)
    
  },
  drawSideLines() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    
     this.ctx.beginPath();
     this.ctx.moveTo(40, 0);
     this.ctx.lineTo(40, 750);
     this.ctx.stroke();
     this.ctx.closePath();
    
    
    this.ctx.beginPath();
    this.ctx.moveTo(460, 0);
    this.ctx.lineTo(460, 750);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  drawInLine() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(250, 0);
    this.ctx.setLineDash([40,20])
    this.ctx.lineTo(250, 750);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.setLineDash([0,0])
  },
  
  
};
