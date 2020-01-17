const canvas = document.querySelector('canvas')
ctx= canvas.getContext('2d');
const screenY = screen.height
const screenX = screen.width
canvas.width = screenX/2
canvas.height = screenY
let rayitas = 12


let movil 

 let interval;
 let frames = 0;

class background{
  constructor(x,y){

  this.x=x
  this.y=y
    }

  draw(){

    ctx.fillStyle='green'
    ctx.fillRect(0, 0,canvas.width,canvas.height)

    ctx.fillStyle='gray'
    ctx.fillRect(100, 0,canvas.width-200,canvas.height)

    ctx.fillStyle='white'
    ctx.fillRect(110, 0,20,canvas.height)
    ctx.fillRect(canvas.width-130, 0,20,canvas.height)


    for (let i = 0; i < rayitas; i++) {
      ctx.fillRect(canvas.width/2, i*100,10 ,canvas.height/20)
     
    }
  }
}


class cochesillo{
constructor(x,y){
      this.x = 0;
      this.y =y;
      this.img = new Image()
      this.img.src = 'images/car.png'
      this.img.onload = () => {
      this.draw()
    }
}


  draw () {
      ctx.drawImage(this.img, this.x, this.y, 100, 200)
  }


  moveleft(){
    if(this.x > 100){
    this.x -= 10
    this.move()
    }
    }
    moverigth(){
      if(this.x < canvas.width-200){
       this.x += 10
       this.move()
      }
    }

    move(){
      this.x+=2
    }

}
function update(){
    
  ctx.clearRect(0, 0, screenX,screenY);
  frames++
  carretera.draw()

  movil.draw()


  
}

function startGame() {
  if(!interval){
    interval = setInterval(update,1000/60)
  }
  
}

  window.onload = function() {
      document.getElementById("start-button").onclick = function() {
      startGame();

      carretera = new background()
      movil = new cochesillo((canvas.width/2) -50,canvas.height-200)
    
    
    
      document.addEventListener('keydown',(e)=>{

      //   if(e.keyCode==37){
      //     movil.move()
      //   }else if(e.keyCode==39)
      //   movil.move()
      // })

        switch(e.keyCode){
          case 37 : 
          return movil.moveleft()

          case 39: 
          return movil.moverigth()

       }
        


    }
  )

}
}