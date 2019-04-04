// PP MEX Gabriela Felipe
window.onload = function() {
  const imagenes = {
    img1:'/images/car.png',
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
    draw2(){
    }

  }
  class Player{
    constructor(x,y,img){
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img
      this.img.onload = () =>{
        this.draw()
      }
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, 50,80)
    }
    moveRight(){
      if (this.x > 275 ) this.x = 165
      this.x += 10
    }
    moveLeft(){
      if (this.x < 75 ) this.x = 185
      this.x -= 10
    }
  }

  class Obstacles{
    constructor(x,y,w,h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }
  }
  let board = new Board()
  let player = new Player(175,400,imagenes.img1)
  let frames = 0
  let interval
  
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

      }
    })
  };

  function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    board.draw()
    player.draw()
    frames++
  }
  function startGame() {
    if(interval) return
    setInterval(update,1000/60)
  }
};
