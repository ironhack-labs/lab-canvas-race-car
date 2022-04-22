//CLASSES
class Background{
  constructor(){
    this.x = 0;
    this.y= 0;
    this.width = 500;
    this.height = 700;
    this.image = new Image();
    this.image.src = "/images/road.png"
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}



//VARIABLES NECESSARIAS 
const canvas =  document.getElementById("canvas");
const ctx = canvas.getContext("2d")
let frames = 0;
const background = new Background();


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    requestId =  requestAnimationFrame(updateGame);

  }

  function updateGame(){
    frames++;
    ctx.clearRect(0,0, 500, 700);
    background.draw();
    console.log("hello")
  }
};

