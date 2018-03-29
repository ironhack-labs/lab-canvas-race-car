window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  function startGame() {
    console.log("GRONF");

    function Canvas(id) {
      var canvas = document.getElementById(id);
      this.w = 550;
      this.h = 520;
    
      this.ctx = canvas.getContext("2d");
    }
    
    Canvas.prototype.drawRect = function(x, y, width, height) {
      this.ctx.fillRect(0, 0, this.w, this.h)
      this.ctx.fillStyle();
    }
    
    var lienzo = new Canvas('road');

//    Canvas.drawRect(100,100,10,10);


    Canvas.prototype.draw= function(x, y, width, height){
      this.drawRect();
      }

    lienzo.draw(); 
     
}
}
