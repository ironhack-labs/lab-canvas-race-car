var keyLeft = 37;
 var keyRight = 39;


 function Canvas(id) {
   this.canvas = document.getElementById(id);
   this.ctx = this.canvas.getContext("2d");
   this.x = 0;
   this.y = 0;
   this.xCar = 175;
   this.yCar = 520;
   this.obstaculoX = 180;
   this.obstaculoY = 20;
   this.obstaculoW = 180;
   this.obstaculoH = 20;
   this.offSet = 0;
   this.dashLineHeight = 20;
   this.grassWidth = 25;
   this.roadWidth = 350;
   this.whiteLineWidth = 10;
   this.height = 650;
 }


 Canvas.prototype.setListeners = function () {
   document.onkeydown = function (e) {
     e.preventDefault();
     switch (e.keyCode) {
       case keyLeft:
         if (this.xCar > 20) {
           this.xCar -= 20;
         }
         break;
       case keyRight:
         if (this.xCar < 335) {
           this.xCar += 20;
         }
         break;
     }

   }.bind(this);
 }

 Canvas.prototype.obstacleMove = function(){
   if(this.obstaculoY > 665){ 
     this.obstaculoY = -20;
     this.obstaculoW = (Math.random()*210)+70;
     this.obstaculoX = Math.random()* 180;
   }else{
     this.obstaculoY += 1;
   }  
 }

 Canvas.prototype.obstacleDraw = function(){
   this.ctx.fillStyle = '#880007';
   this.ctx.fillRect(this.obstaculoX, this.obstaculoY, this.obstaculoW, this.obstaculoH);  
 }

 Canvas.prototype.clear = function(){
   this.ctx.clearRect(0, 0, 400, this.height);
 }

 Canvas.prototype.draw = function () {
   this.ctx.beginPath();
   this.ctx.fillStyle = '#008101';
   this.ctx.fillRect(this.x, this.y, this.grassWidth, this.height);  
   this.ctx.fillStyle = '#008101';
   this.ctx.fillRect(this.x + 375, this.y, this.grassWidth, this.height);  
   this.ctx.fillStyle = '#808080';
   this.ctx.fillRect(this.x + 25, this.y, this.roadWidth, this.height);  
   this.ctx.fillStyle = '#FFFDFF';
   this.ctx.fillRect(this.x + 35, this.y, this.whiteLineWidth, this.height);  
   this.ctx.fillStyle = '#FFFDFF';
   this.ctx.fillRect(this.x + 355, this.y, this.whiteLineWidth, this.height);  
   this.dashLineDraw();
   this.carImg();
   this.obstacleDraw();
   this.ctx.closePath();
 }

 Canvas.prototype.collision = function(){
   if( this.xCar+50 >= this.obstaculoX && this.obstaculoX+this.obstaculoW >= this.xCar &&
     this.yCar+100 >= this.obstaculoY && this.obstaculoY+this.obstaculoH >= this.yCar){
     return true;
   }

 }
 Canvas.prototype.carImg = function () {
   var img = new Image()
   img.src = './images/car.png';
   img.onload = function () { 
     this.ctx.drawImage(img, this.xCar, this.yCar, 50, 100);
   }.bind(this);
 }

 Canvas.prototype.dashLineDraw = function () { 
     this.ctx.strokeStyle = '#FFFDFF';
     this.ctx.lineWidth=5;    
     this.ctx.setLineDash([20, 40]);   
     this.ctx.lineDashOffset = this.offset;  
     this.ctx.moveTo(200, 0);
     this.ctx.lineTo(200, 650);
     this.ctx.stroke();
 }

 window.onload = function () {
   document.getElementById("start-button").onclick = function () {
    startGame();
    window.reload(); 
   };

   var road = new Canvas("road");
   road.draw();
   function startGame() {
     var counter=0;
    var id = setInterval(function () {
      road.draw();
      road.offset = -counter% 60; 
       road.setListeners();
       road.obstacleMove();
       if(road.collision()){
         clearInterval(id);
         alert ("Game Over");
       }
       counter++;
     }, 1000 / 600);
   }
 };