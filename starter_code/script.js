window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };


  var canvas = document.getElementById('c')
  var ctx = canvas.getContext('2d')
  var frames = 0;
  var interval;
  var road = []
  var obstacles = []

  function startGame() {


    function Board(y = -40) {
      this.y = y
      this.draw = function () {
        ctx.fillStyle = "grey"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green"
        ctx.fillRect(0, 0, 50, canvas.height)
        ctx.fillRect(canvas.width - 50, 0, 50, canvas.height)
        ctx.fillStyle = "white"
        ctx.fillRect(60, 0, 10, canvas.height);
        ctx.fillRect(canvas.width - 70, 0, 10, canvas.height);
      }

      this.drawLines = function () {
        this.y++
        ctx.fillStyle = 'white'
        ctx.fillRect(canvas.width / 2 - 20, this.y, 20, 40)
      }

      this.score = function (){
        ctx.fillStyle = 'cornflowerblue'
        ctx.font = "bold 26px Avenir"
        ctx.fillText("Score: " + Math.floor(frames/60),canvas.width/2-45,50)
  
      }
    }


    function car() {
      this.x = canvas.width / 2 - 60
      this.y = canvas.height - 300
      this.width = 100
      this.height = 150
      this.image = new Image()
      this.image.src = "https://github.com/ZagZ/lab-canvas-race-car/blob/master/starter_code/images/car.png?raw=true",
        this.image.onload = () => this.draw()
      this.draw = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      }
      
    }

    function obstacle(randomX,randomW ){
      this.x = randomX
      this.y = -40
      this.width = randomW
      this.height = 40
      this.draw = function (){
        this.y++
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
    }


    var boardsito = new Board()
    var carrito = new car()


    addEventListener("keydown", function (e) {
      if (e.keyCode === 39) {
        carrito.x += 180
        if (carrito.x >= (canvas.width / 2 - 60) + 180) {
          carrito.x = (canvas.width / 2 - 60) + 180
        }
      }

      if (e.keyCode === 37) {
        carrito.x -= 180
        if (carrito.x <= (canvas.width / 2 - 60) - 180) {
          carrito.x = (canvas.width / 2 - 60) - 180
        }
      }
    })

    //funciones principales

    function update() {
      frames++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      boardsito.draw();
      drawRoad()
      carrito.draw()
      drawObstacles()
      boardsito.score()


    }

    function start() {
      interval = setInterval(update, 1000 / 60)
    }


    //aux functions

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

    start()
  }
  }



