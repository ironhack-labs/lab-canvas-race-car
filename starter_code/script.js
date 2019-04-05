// PP MEX Gabriela Felipe
window.onload = function() {
  const imagenes = {
    img1:'./images/car.png',
    img2:''
  }
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  class Board {
    constructor(){
      this.x = 0
      this.y = 0
      this.height = canvas.height
      this.width = canvas.width
    }
    draw(){
      ctx.fillStyle = 'green' 
      ctx.fillRect(0, 0, 50, this.height)
      ctx.fillStyle = 'grey'
      ctx.fillRect(50, 0, 350, this.height)
      ctx.fillStyle = 'white'
      ctx.fillRect(65, 0, 7, this.height)
      ctx.fillStyle = 'green' 
      ctx.fillRect(350, 0, 50, this.height)
      ctx.fillStyle = 'white'
      ctx.fillRect(325, 0, 7, this.height)
      
      
      for(let y = 5; y < this.height; y+=40){
        ctx.fillStyle = 'white'
        ctx.fillRect(195, y , 5, 25)
      }
    }
    draw2(score){
      ctx.font = '20px Arial'
      ctx.fillText('Score :',50,50)
    }

  }
  class Player{
    constructor(x,y,img){
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img
      // this.img.onload = () =>{
      //   this.draw()
      // }
    }
    draw(){
      if (this.y > 400  ) this.y = 400
      ctx.drawImage(this.img, this.x, this.y, 50,80)
      this.y++
    }
    moveRight(){
      if (this.x > 275 ) this.x = 265
      this.x += 10
    }
    moveLeft(){
      if (this.x < 75 ) this.x = 85
      this.x -= 10
    }
    moveUp(){
      if (this.y > 500 ) this.y = 490
      this.y += 30
    }
    moveDown(){
      if (this.y < 80 ) this.y = 90
      this.y -= 10
    }
  }

  class Obstacles{
    constructor(x,w,color){
      this.x = x
      this.w = w
      this.color = color
    }
    draw(y){
      y > 500 ? y = 0 : y++
      ctx.fillStyle = this.color
      ctx.fillRect(this.x + 75,y,this.w-75,20)
      // ctx.fillStyle = 'orange'
      // ctx.fillRect(150,y,w,20)
      // ctx.fillStyle = 'orange'
      // ctx.fillRect(200,y,w,20)
      // ctx.fillStyle = 'orange'
      // ctx.fillRect(250,y,w,20)
    }
    draw2(y,w){
      ctx.fillStyle = 'blue'
      ctx.fillRect(250,y,w,20)
    }
    draw3(y,w){
      ctx.fillStyle = 'red'
      ctx.fillRect(150,y,Math.random()*200,20)
    }
    draw4(y,w){
      ctx.fillStyle = 'green'
      ctx.fillRect(200,y,w,20)
    }
  }
  
  const _POSITION = 75
  const _WIDTH = 200
  let board = new Board()
  let player = new Player(175,400,imagenes.img1)
  const colorsArray = ['blue','DEEPPINK','yellow','peru','LIGHTSALMON','orange','grape']
  let obstacle = new Obstacles(rnd(200),rnd(200),colorsArray[Math.floor(Math.random()*colorsArray.length-1)])
  let obstacle2 = new Obstacles(rnd(200),rnd(200),colorsArray[rnd(colorsArray.length-1)])
  let obstacle3 = new Obstacles(rnd(200),rnd(200))
  let obstacle4 = new Obstacles(rnd(200),rnd(200))
  let positiony2 = rnd(300)-650
  let positiony3 = rnd(300)-650
  let positiony4 = rnd(300)-650
  let positiony = 0
  let frames = 0
  let interval
  let score = 0
  
  document.getElementById("start-button").onclick = function() {
    startGame();
    document.addEventListener('keydown', e =>{
      switch (e.keyCode){
        case 39:
          player.moveRight()
          break
        case 37:
          player.moveLeft()
          break
        case 40:
          player.moveUp()
          break
        case 38:
          player.moveDown()
          break
      }
    })
  };
  function rnd(len){
    let x = len
    x = Math.floor(Math.random()*len)
    return x
  }
  function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    board.draw()
    player.draw()
    if (frames >= 500){
      frames = 0
    }
    if( frames%100 === 0){
    }
    
    if (positiony > 500){
      positiony = 0
      obstacle = new Obstacles(rnd(200),rnd(200),colorsArray[rnd(colorsArray.length-1)])
      score++
    } 
    if (positiony2 > 500){
      positiony2 = 0
      obstacle2 = new Obstacles(rnd(200),rnd(200),colorsArray[rnd(colorsArray.length-1)])
      score++
    } 
    if (positiony3 > 500){
      obstacle3 = new Obstacles(rnd(200),rnd(200),colorsArray[rnd(colorsArray.length-1)])
      positiony3 = 0
      score++
    } 
    if (positiony4 > 500){
      obstacle4 = new Obstacles(rnd(200),rnd(200),colorsArray[rnd(colorsArray.length-1)])
      positiony4 = 0
      score++
    } 
    
    positiony++
    positiony2++
    positiony3++
    positiony4++
    obstacle.draw(positiony)
    obstacle.draw2(0)
    obstacle2.draw(positiony2)
    obstacle3.draw(positiony3)
    obstacle4.draw(positiony4)
    
    frames++
  }
  function startGame() {
    if(interval) return
    setInterval(update,1000/60)
  }
};
