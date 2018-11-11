
var canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
var interval = 0
var frames = 0;
var road = []

var obstacles = []
var music = { 
    onRoad: './sounds/dame-tu-cocona-la-sarita.mp3',
    Lose:'./sounds/sad-song.mp3'
}

audio = new Audio();

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    frames = 0
    road = []
    obstacles = []
    audio.src = music.onRoad
    audio.loop = true
    audio.play()
    if(!interval) 
      interval = setInterval(update, 1000/500)   
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
    this.score = function (){
      ctx.fillStyle = 'black'
      ctx.font = "bold 24px Avenir"
      ctx.fillText("Score: " + Math.floor(frames/60),canvas.width/2-45,50)

    }

  }

  function car(){
    this.x = canvas.width/2 - 29
    this.y = canvas.height - 120
    this.draw = function () {
      var img = new Image()
      img.src = "../starter_code/images/car.png"
      ctx.drawImage(img, this.x ,this.y , 50 ,80)
    }

    this.isTouch = function (item){
         return ((this.x < item.x + item.width) && 
            (this.x > item.x) && 
            (this.y<item.y + item.height) && 
            (this.y > item.y) )
    }
    
  }

  function obstacle(randomX,randomW ){
    this.x = randomX
    this.y = -40
    this.width = randomW
    this.height = 30
    this.draw = function (){
      this.y++
      ctx.fillStyle = 'red'
      ctx.fillRect(this.x, this.y, this.width, this.height)
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
    if(obstacles.length>0)
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
       gameOver()  
    }
  }

  function gameOver(){
    clearInterval(interval)
    interval = null
    delete board
    delete car
    audio.src= music.Lose
    audio.play()
    ctx.fillStyle = "black"
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "red"
    ctx.font = " bold 80px Arial"
    ctx.fillText("GAME OVER!", 80,300)
    ctx.fillStyle = "white"
    ctx.font = " bold 40px Arial"
    ctx.fillText("Your final score: "+ Math.floor(frames/60), 160,400)
    ctx.font = " bold 20px Arial"
    
    
    setInterval(function(){
      ctx.fillStyle = "black"
      ctx.fillRect(0,0,canvas.width,canvas.height);
        
          ctx.fillStyle = "red"
          ctx.font = " bold 90px Arial"
          ctx.fillText("GAME OVER!", 50,150)
          ctx.font = " bold 110px Arial"
          ctx.fillText("GAME OVER!", -80,250)
          ctx.font = " bold 140px Arial"
          ctx.fillText("GAME OVER!", -300,400)
          ctx.font = " bold 160px Arial"
          ctx.fillText("GAME OVER!", -400,550)
          ctx.fillStyle = "white"
          ctx.font = " bold 180px Arial"
          ctx.fillText("OVER!", 50,350)
          mls=0
        
   
    },30000/10)
  }


  

  function update() {
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height)
    board.draw()
    drawRoad()
    car.draw()
    drawObstacles()
    board.score()
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


