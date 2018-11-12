//Canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//Variables
var interval
var frames = 0
var images = {
    car: "./images/car.png",
    obst_izq: "./images/obstaculo_izq.png",
    obst_der: "./images/obstaculo_der.png",
}
var lines = []
var obstaculos= []

//Clases
function Board(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height

    this.draw = function(){
        ctx.fillStyle= "green"
        ctx.fillRect(0,0, 40,500)
        ctx.fillRect(380,0, 40,500)

        ctx.fillStyle= "gray"
        ctx.fillRect(40,0, 10,500)
        ctx.fillRect(60,0, 300, 500)
        ctx.fillRect(370,0, 10,500)
    }

    this.lines = function() {
        this.y++
        ctx.fillStyle = 'white'
        ctx.fillRect(210, this.y, 6, 20)
      }
    
    this.drawScore = function(){
        ctx.fillStyle = 'black'
        ctx.font = "bold 24px Avenir"
        ctx.fillText("Score: " + Math.floor(frames/60), 50,50)
    }
}

function Car(){
    this.x = canvas.width/2 -55
    this.y = canvas.height/2 +160
    this.width = 35
    this.height = 70
    this.image = new Image()
    this.image.src = images.car
    this.draw = function(){
        this.boundaries()
        ctx.drawImage(this.image, this.x, this.y,this.width,this.height)
      }
    
    this.boundaries = function(){
        if(this.x < 60) this.x =60
        if (this.x > 320) this.x = 320

    }  

    this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
    }
}

function Obstaculo(width,position){
    this.x = position === "izq" ? 0 : width
    this.y = 0
    this.width = width
    this.height = 30
    this.image = new Image()
    this.image.src = position === "izq" ? images.obst_izq : images.obst_der
    this.draw = function(){
        this.y+=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }
}

//Instancias 
var board = new Board()
var car = new Car()
var obstaculo = new Obstaculo()

//Main function
function startGame(){
    interval = setInterval (update, 1000/60)
    
}
function update (){
    frames++
    ctx.clearRect (0,0,canvas.Width,canvas.height)
    board.draw()
    drawLines()
    board.drawScore()
    car.draw()
    drawObst()
    checkCarCollition()

}
function gameOver (){
    clearInterval(interval)
    interval = null
    ctx.fillStyle = "red"
    ctx.font = "bold 80px Arial"
    ctx.fillText("GAME OVER", 50,200)
    ctx.fillStyle = "black"
    ctx.font = "bold 40px Arial"
    ctx.fillText("Tu score: " + Math.floor(frames/60), 200,300)
    ctx.font = "bold 20px Arial"
    ctx.fillText("Presiona 'Return' para reiniciar", 50,350)
}


//aux function 
function lines1 (){
    if (frames % 125 === 0){
        lines.push(new Board())
    }
}

function drawLines(){
    lines1()
    lines.forEach(function(board){
        board.lines()
      })
}

function generateObs(){
    if(frames%150===0) {
        var width = Math.floor(Math.random()*200 + 50)
        if(width % Math.floor(Math.random()*3) === 0){
            var position = "izq"
    }
    obstaculos.push(new Obstaculo(width,position))
    }
}

function drawObst(){
    generateObs()
    obstaculos.forEach(function(obstaculo){
        obstaculo.draw()
    })
}

function checkCarCollition(){
    for(var obstaculo of obstaculos){
        if(car.isTouching(obstaculo)){
            gameOver()
        }
    }
}

//listeners
addEventListener("keyup", function(e){
    switch (e.keyCode){
        case 37:
            car.x -= 25
            break
        case 39:
            car.x += 25
            break
    }
})


addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 13:
            return start()
        default:
            return
    }
} )
window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    }
  
    function startGame() {
        if(!interval) interval = setInterval(update,100/60)
    }
}