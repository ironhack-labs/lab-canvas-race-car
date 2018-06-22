window.onload = function() {
 
    document.getElementById("start-button").onclick = function() {
      startGame();
    
      car.drawCar();
    };
  

  /// Carretera
  
    function startGame() {
      var canvas = document.getElementById("example");
      ctx = canvas.getContext("2d");
      ctx.save();
      ctx.fillStyle = "#008500";
      ctx.fillRect(0, 0, 700, 850);
      ctx.save();
      ctx.fillStyle = "#7F7F7F";
      ctx.fillRect(30, 0, 630, 850);
      ctx.restore();
      ctx.fillStyle = "#FFF";
      ctx.fillRect(50, 0, 20, 850);
      ctx.beginPath();
      ctx.setLineDash([15, 35]);
      ctx.moveTo(350, 15);
      ctx.lineTo(350, 850);
      ctx.lineWidth = "10";
      ctx.strokeStyle = "#FFF";
      ctx.stroke();
      ctx.fillStyle = "#FFF";
      ctx.fillRect(620, 0, 20, 850);
    }
  
};

//CLASE CAR
function Drawcar() {
      this.imageCar = "./images/car.png";
      this.x = 220;
      this.y = 500;
  
      
      this.goLeft = function() {
          this.x -= 1;
      }
  
     
      this.goRight = function() {
          this.x += 1;
      }
  
     
     
  
  }


