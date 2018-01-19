window.onload = function() {
  


  var myGameArea = {
    canvas : document.createElement("canvas"),
    draw : function() {
        var parent  = document.getElementById("game-board");
        this.canvas.width  = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, 20, this.canvas.height);
        this.context.fillRect(this.canvas.width - 20, 0, 20, this.canvas.height);
        this.context.fillStyle = 'gray';
        this.context.fillRect(20, 0, this.canvas.width - 40, this.canvas.height);
        this.context.fillStyle = 'white';
        this.context.fillRect(28, 0, 10, this.canvas.height);
        this.context.fillRect(this.canvas.width - 38, 0, 10, this.canvas.height);
        this.context.beginPath();
        this.context.setLineDash([10, 10]);
        this.context.lineWidth=5;
        this.context.strokeStyle = 'white';
        this.context.moveTo(this.canvas.width/2 - 5, 5);
        this.context.lineTo(this.canvas.width/2 - 5, this.canvas.height);
        this.context.stroke();
        this.context.closePath();
        var gameBoard = document.getElementById("game-board");
        gameBoard.appendChild(this.canvas);
    }
  }

  var player = {
    car: new Image(),
    draw: function(){
      this.car.src = this.src;
    },
    scale:319/158,
    src : 'images/car.png'
  }



  myGameArea.draw();
  player.draw();

  player.car.onload = function() {
    myGameArea.context.drawImage(player.car, myGameArea.canvas.width/2 - 60/2 , myGameArea.canvas.height - 60*player.scale - 10, 60, 60*player.scale);
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    
  }


};
