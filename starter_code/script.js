window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };

    var game = new Game();

    function Game (){
      this.canvas = document.querySelector("#canvas")
      this.ctx = canvas.getContext('2d');
      this.height = this.canvas.height;
      this.width = this.canvas.width;
      this.img = new Image();
      this.img.src = 'images/car.png'
    }

    //Nos creamos el prototipo de la clase donde indicaremos lo que vamos pintando.

    Game.prototype.drawBackground = function (){
      this.ctx.fillStyle = "#228B22";
      this.ctx.fillRect(0, 0, this.width, this.height)

      this.ctx.fillStyle = "#A9A9A9";
      this.ctx.fillRect(42, 0, 520, this.height);

      this.ctx.fillStyle = "white"
      this.ctx.fillRect(75, 0, 10, this.height);

      this.ctx.fillStyle = "white"
      this.ctx.fillRect(520, 0, 10, this.height);

      this.ctx.strokeStyle = "white";
      this.ctx.beginPath();
      this.ctx.setLineDash([30, 30]);
      this.ctx.lineWidth = 7;
      this.ctx.moveTo(300, 0);
      this.ctx.lineTo(300, 700);
      this.ctx.stroke();

      this.ctx.drawImage(this.img, 340, 300);
    }

    Image.prototype.drawImage = function(){
      
    }


    //Fuera del contexto de la clase al llamar a startGame entrará y empezará a dibujar.

    function startGame() {
      game.drawBackground();

    }

  
  

}

