const $canvas = document.querySelector('canvas')
const $ctx=$canvas.getContext('2d')

const image = new Image()
const carImg = new Image()
carImg.src = "./images/car.png"


class Board {
  constructor(x,y){
    this.x=x
    this.y=y
    this.img=new Image()
    //this.img.src= imageUrl ///El background se puso en CSS porque nunca pudimos aqui
  }
  draw(){
    $ctx.drawImage(this.img, this.x, this.y, 200,200)
  }
}  

class Character{
  constructor(x,y,imageUrl) {
    this.x=x
    this.y=y
    this.img=new Image()
    this.img.src= imageUrl
  }
  draw(){
    $ctx.drawImage(this.img, this.x, this.y, 70,100)
  }
  move(Dir){
    switch (Dir) {
      case 'Right':
        if (this.x>=$canvas.width) return;
        this.x++;
        break;
      case 'Left':
          if (this.x<=0) return
          this.x--
      default: 
      throw new Error('invalid direction')
    }
  }
}


const board= new Board(0,0)
const character= new Character(200,400,carImg.src)


function Update() {
  clearCanvas()
  board.draw()
  character.draw()
}






window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    setInterval(Update,1000/60)
  }
};

document.onkeydown = e => {
  switch (e.key) {
    case 'ArrowRight':
      return character.move('Right')
    case 'ArrowLeft':
      return character.move('Left')
    default:
      break;
  }
}

function clearCanvas(){
  $ctx.clearRect(0,0,$canvas.width,$canvas.height)
}