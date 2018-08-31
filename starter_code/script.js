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
      goRight(){
        if(this.x<260){
          this.x+=10
          console.log(this.x)
        }  
      }
    }
    class Obstacle{
      constructor(x,y,w,h){
        this.x = Math.floor(Math.random() * canvas.width)
        this.y = 0
        this.w = w
        this.h = 5
      }
      drawObstacle(){
      ctx.beginPath()
      ctx.fillStyle = "#B52209"
      ctx.fillRect(this.x,this.y,this.w,this.y)
      }
    }

    var large = new Obstacle(Math.floor(Math.random() * canvas.width),0,200,5)
    var medium= new Obstacle(Math.floor(Math.random() * canvas.width),0,150,5)
    var small= new Obstacle(Math.floor(Math.random() * canvas.width),0,100,5)

    var walls=[large,medium,small]

    function drawObs(){
      for(var i =0; i < walls.length; i++){
        var random = walls[Math.floor(Math.random() * 3)]
        random.drawObstacle();
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
      random.drawObstacle();
    }, 1000/60)
    

   var player = new Player(); 
   // keypress functions
   document.onkeydown=function(e){
     
    switch(e.keyCode){
      case 37: player.goLeft()
        break;
      case 39: player.goRight()
        break;
    }
   }//keydown
   //

  }//startgame function
}// window onload function
