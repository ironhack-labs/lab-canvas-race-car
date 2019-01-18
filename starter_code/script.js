window.onload = function() {
  //Cuando cargue el DOM me cargas el evento de escucha onclick que lanza la función startGame
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  //¿Qué funciones quieres que se lancen cuando pulsas sobre el botón Start Game? 
  function startGame() {
    game.drawBackground()
    game.drawCar();
  }

  var game = new Game;

//Estas declarando las propiedades de Game (función constructora en este caso del canvas) entonces tienes que apuntar al canvas al que quieres dibujar, decirle el contexto, y añadirle el tamaño del canvas 
  function Game (){
    this.canvas = document.querySelector("#canvasExp")
    this.ctx = this.canvas.getContext('2d');
    this.height = this.canvas.height;
    this.width = this.canvas.width;

    this.img = new Image();
    this.img.src = 'images/car.png'
    
    
    
  }

  Game.prototype.drawBackground = function (){
    this.ctx.fillStyle = ("#008200")
    this.ctx.fillRect (0,0,this.width,this.height)
    this.ctx.fillStyle = ("#808080")
    this.ctx.fillRect(30,0,this.width*0.88, this.height)
    this.ctx.fillStyle = ("#FFFFFF")
    this.ctx.fillRect (36, 0, 9, this.height)
    this.ctx.fillStyle = ("#FFFFFF")
    this.ctx.fillRect (427, 0, 9, this.height)

    
    }

    Game.prototype.drawCar = function (){
      this.ctx.drawImage(this.img, 100, 100)
    }

  

};

