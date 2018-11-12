window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var frames = 0;
    var intervalo;
    var road = []
    var images = {
      coche : "./images/car.png", 
      obstacle_bottom: "https://github.com/ironhack-labs/lab-canvas-flappybirds/blob/master/starter_code/images/obstacle_bottom.png?raw=true",
      obstacle_top: "http://www.stickpng.com/assets/images/58afdaa0829958a978a4a68a.png"
    }
    
    function Board(y = -40) {
      this.y = y
      this.draw = function() {
        ctx.fillStyle = "grey"
        ctx.fillRect(0,0,300,canvas.height);
        ctx.fillStyle = "green"
        ctx.fillRect(0,0,50,canvas.height)
        ctx.fillRect(canvas.width/2-50, 0, 50, canvas.height)
        
        ctx.fillStyle = "white"
        ctx.fillRect(60,0,10,canvas.height);
        ctx.fillRect(canvas.width/2- 70,0,10,canvas.height);
        
        ctx.fillRect(canvas.width - 70,0,10,canvas.height);
      }
      this.drawLines = function() {
        this.y++
        ctx.fillStyle = 'white'
        ctx.fillRect(canvas.width/4-20, this.y, 20, 40)
      }
    }
    
    function Character (x,y){
      Board.call(this)
      this.x=x
      this.y=y
      this.height=50
      this.width=50
      this.image= new Image()
      this.image.src=images.coche
      this.draw= function(){
  
          ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      
    }}

    //

    var pipes = []


    function Pipe(height,y, position){
        this.x = canvas.width + 60
        this.y = y || 0
        this.width = 60
        this.height = height
        this.image = new Image()
        this.image.src = position === "top" ? images.obstacle_top : images.obstacle_bottom
        
        this.draw = function(){
            this.x-=2
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
        }
    }
    
    
    
    
    function generatePipes(){
        if(frames%150===0) {
            var width = Math.floor(Math.random()*200 + 50)
            pipes.push(new Pipe(width,0, "top"))
            var h = 0
            var y = canvas.width - h
            pipes.push(new Pipe(h,y))
        }
        
    }
    
    function drawPipes(){
        generatePipes()
        pipes.forEach(function(pipe){
            pipe.draw()
        })
    }
    
    
        
   
    //
    
    var boardsito = new Board()
    var coche     = new Character(120,500);
    
    function update() {
      frames++
      ctx.clearRect(0,0,canvas.width, canvas.height)
      boardsito.draw();
      drawRoad()
      coche.draw()
      
    drawPipes()
      
    }
    
    function start() {
      interval = setInterval(update, 1000/60)  
    }
    
    function generateRoad() {
      if (frames % 100 === 0) {
        road.push(new Board())
      }
    }
    
    function drawRoad() {
      generateRoad()
      road.forEach(e => {
        e.drawLines()
      })
    }
    
    addEventListener('keydown',function(e){
      switch(e.keyCode){
          case 37:
              coche.x -=8
              return
          default:
              return
      }
  } )
  addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 39:
            coche.x +=8
            return
        default:
            return
    }
} )


    start()
    
 
    


  }
};


