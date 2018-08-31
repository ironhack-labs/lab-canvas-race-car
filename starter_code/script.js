window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")
  
  function startGame() {

    //Function DrawBack
    function drawBackground(){
      
  
      //Grey rectangle
      ctx.beginPath()
      ctx.fillStyle = "#7C7A7D"
      ctx.fillRect(0,0,500,800)
      //Left side of the road
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.fillRect(0,0,20,800)
  
      ctx.beginPath()
      ctx.fillStyle = "#fff"
      ctx.fillRect(30,0,10,800)
  
      //Right side of the road
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.fillRect(280,0,20,800)
  
      ctx.beginPath()
      ctx.fillStyle = "#fff"
      ctx.fillRect(260,0,10,800)
  
      ctx.beginPath();
      ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
      ctx.moveTo(150,0);
      ctx.lineTo(150,800);
      ctx.lineWidth=5
      ctx.strokeStyle="#fff"
      ctx.stroke();
    }

    
    //
    class Player {
      constructor(){
        this.x = 140
        this.y = 130
      }
      goLeft(){ 
        if(this.x>0){
          this.x-=10
          console.log(this.x) 
        }       
      }
    }
    //
    function drawCar(){
      var car = new Image()
      car.src = "./images/car.png"

      car.onload=function(){
        
        ctx.drawImage(car,player.x,player.y,25,20);

      }
    }

    var interval = setInterval(function(){
      ctx.clearRect(0,0,canvas.width, canvas.height)
      drawCar();
      drawBackground();
    }, 1000/60)
    

   var player = new Player(); 
   // keypress functions
   document.onkeydown=function(e){
     
    switch(e.keyCode){
      case 37: player.goLeft()
            
         break;
    }
   }//keydown
   //

  }//startgame function
}// window onload function
