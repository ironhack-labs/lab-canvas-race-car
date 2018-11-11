
var canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
var frames = 0;
var intervalo;
var road = []
var obstacles = []

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    interval = setInterval(update, 1000/60)  
  }


  function Board(y = -40) {
    this.y = y
    this.draw = function() {
      ctx.fillStyle = "grey"
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "green"
      ctx.fillRect(0,0,50,canvas.height)
      ctx.fillRect(canvas.width - 50, 0, 50, canvas.height)
      ctx.fillStyle = "white"
      ctx.fillRect(60,0,10,canvas.height);
      ctx.fillRect(canvas.width - 70,0,10,canvas.height);
    }
    this.drawLines = function() {
        this.y++
        ctx.fillStyle = 'white'
        ctx.fillRect(canvas.width/2 -10, this.y, 10, 40)
    }


  }

  function car(){
    this.x = canvas.width/2 - 29
    this.draw = function () {
      var img = new Image()
      img.src = "../starter_code/images/car.png"
      ctx.drawImage(img, this.x , canvas.height - 120, 50 ,80)
    }

    this.isTouch = function (item){
         return ((this.x < item.x + item.width) && 
            (this.x + this.width > item.x) && 
            (this.y<item.y + item.height) && 
            (this.y + this.height > item.y) )
    }
    
  }

  function obstacle(randomX,randomW ){
    this.y = -40
    this.draw = function (){
      this.y++
      ctx.fillStyle = 'red'
      ctx.fillRect(randomX, this.y, randomW, 30)
    }
    

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

  function generateObstacles(){
    if (frames % 500 === 0) {
      var x = Math.floor(Math.random()*((canvas.width-150) - 58) + 58)
      var w = Math.floor(Math.random()*((canvas.width-300) - 50) + 50)
      if(x+w>canvas.width - 160) 
         w = canvas.width - 70 - x
      obstacles.push(new obstacle(x,w))
    }
    if(obstacles[0].y > canvas.height + 200)
        obstacles.shift()
        
  }

  function drawObstacles(){
    generateObstacles()
    obstacles.forEach(e => {
      e.draw()
    })
  }
  var board = new Board()
  var car = new car()

  function collition(){
 
    for(var i of obstacles){
      if(car.isTouch(i))
       { console.log('hola') 
       gameOver()  }
    }
  }

  function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.fillStyle = "black"
    ctx.font = " bold 80px Arial"
    ctx.fillText("GAME OVER", 300,300)
  }


  

  function update() {
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height)
    board.draw()
    drawRoad()
    car.draw()
    drawObstacles()
    collition()
  } 




  
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 37:
            if(car.x > 100)
            car.x -=50
            break;
        case 39:
            if(car.x < canvas.width - 160)
            car.x +=50
            break;
        default:
            return
    }
  } )


};


