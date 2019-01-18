window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };
  
    function startGame() {
        game.drawbackground(); 
     
    }

    var game = new Game;

    function Game() {

        this.canvasDOM = document.querySelector("#canvasExp");
        this.ctx = this.canvasDOM.getContext('2d');
        this.w = this.canvasDOM.width;
        this.h = this.canvasDOM.height;
        this.img = new Image();
        this.img.src = "images/car.png";
        
       // this.img.onload = function (){
            
          //  this.ctx.drawImage(this.img, (this.w/2-35), (this.h-120),80,120); 
          //  setInterval(function(){
          //      this.ctx.drawImage(this.img, (this.w/2-35), (this.h-120),80,120)  
          //      },500)
        //}
        //this.speedX = 0;
        //this.speedY = 0;
        //this.update = function(){
        //    
        //    this.ctx.drawImage(this.img, (this.w/2-35), (this.h-120),80,120)
        //    }
  };

      Game.prototype.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
              this.speedX -= 1;
              break;
            case 39:
              this.speedY += 1;
              break;
            }
      }

      
      Game.prototype.drawbackground = function(){
        this.ctx.fillStyle = "#317f43";
        this.ctx.fillRect(0, 0, this.w, this.h );
        this.ctx.fillStyle = "#575958";
        this.ctx.fillRect(12, 0, (this.w-25), this.h);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(24, 0, 8, this.h);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(270, 0, 8, this.h);
        
        this.ctx.beginPath();
        this.ctx.lineWidth = 6;
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.setLineDash([20,6]);
        
        this.ctx.moveTo(this.w/2,0);
        this.ctx.lineTo(this.w/2,this.h);
        this.ctx.stroke();
       
        
        //setInterval(function(){ 
        //    clearInterval(this.ctx);
        //        this.ctx.drawImage(this.img, (this.w/2-35)+this.speedX, (this.h-120)+this.speedY,80,120)  
        //},500)

        this.ctx.drawImage(this.img, (this.w/2-35), (this.h-120),80,120)
      }
    
};

