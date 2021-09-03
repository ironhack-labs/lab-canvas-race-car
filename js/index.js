const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let gameInterval; //Fps como se actualiza el juego

class Board{
    constructor(){
      this.x = 0;
      this.y = 0;
      this.width = $canvas.width;
      this.height = $canvas.height;
      this.img = new Image();
      this.img.src = "../images/road.png";     
    }
    draw(){
     
      if(this.y>= $canvas.height) this.y=0;
      this.y++

      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
      ctx.drawImage(
        this.img,
        this.x,
        this.y- $canvas.height,
        this.width,
        this.height
      );
    }
}

    //CLASE COCHE
    class Carro {
      constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 90;
        //MOVIMIENTO
        this.speed = 6;
        this.img = new Image();
        this.img.src = "../images/car.png"
      }

      draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  
  
      }

      moveRight(){
        this.x += this.speed
      }
      
      moveLeft(){
        this.x -= this.speed
      }
    }



    //INSTANCIA COCHE
    const carro = new Carro(215, 600)
    

    //INSTANCIA BOARD
    const board = new Board()

   //MOTOR
   function updateGame(){
      board.draw()
      carro.draw()
   }


    window.onload = () => {
      document.getElementById('start-button').onclick = () => {
        startGame();
      };

      function startGame() {
        if(gameInterval) return
        gameInterval = setInterval(updateGame, 1000 / 60)
       
      }
};
