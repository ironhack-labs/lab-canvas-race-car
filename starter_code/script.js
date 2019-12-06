window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    }
  };
  
  var myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,
    start: function() {
      console.log('lalla')
      this.canvas.width = 480;
      this.canvas.height = 520;
      this.ctx = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.ctx.fillStyle = 'gray';
      this.ctx.fillRect(0, 0, 480, 520);
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(0, 0, 25, 520);
      this.ctx.fillStyle = 'green';
      this.ctx.fillRect(455, 0, 25, 520);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(35, 0, 10, 520);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(435, 0, 10, 520);
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 5;
      this.ctx.setLineDash([15, 25]);
      this.ctx.moveTo(240, 0);
      this.ctx.lineTo(240, 520);
      this.ctx.stroke();
      
      // call updateGameArea() every 20 milliseconds
      //this.interval = setInterval(updateGameArea, 20); //updategamearea é um funcao que vai ser chamada la emabaixo
    },
    // clear: function() {
    //   this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //vai limpar a tela a cada 20milisec
    // },
    // stop: function() {
    //   clearInterval(this.interval);
    // },
    // score: function() {
    //   var points = Math.floor(this.frames / 5);
    //   this.context.font = "18px serif";
    //   this.context.fillStyle = "black";
    //   this.context.fillText("Score: " + points, 350, 50);
    // }
  };
  

function startGame() {
  myGameArea.start()
}