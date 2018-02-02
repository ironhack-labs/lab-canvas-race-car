window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };



  //image
  // var img=document.getElementById("scream");
  // ctx.drawImage(img,10,10);

 

  function startGame() {
 
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 530;
    canvas.height = 800;
  
   
    //linea green 
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,50,800)
    //linea grey
    ctx.fillStyle = "grey";
    ctx.fillRect(50,0,10,800)
    //linea grey
    ctx.fillStyle = "grey";
    ctx.fillRect(70,0,400,800)
    //linea grey
    ctx.fillStyle = "grey";
    ctx.fillRect(480,0,10,800)
  
   //linea green
   ctx.fillStyle = "green";
   ctx.fillRect(490,0,50,800)
  
    //lineas blancas 
  
    ctx.setLineDash([25, 20]);/*dashes are 5px and spaces are 3px*/
  
    ctx.beginPath();
  
    ctx.lineWidth=5;
    ctx.strokeStyle = "white";
    ctx.moveTo(260,0);
    ctx.lineTo(260, 800);
    ctx.stroke();
    ctx.closePath();
    //image
    var carImg = document.createElement('img');
    carImg.src = 'images/car.png';
    carImg.onload = function(){
      ctx.drawImage(carImg, 200, 550, 100, 200);
    }
    
    function Player(carImg) {
      this.width = 100;
      this.height = 200;
      this.x = 200;
      this.y =550;
      
      this.left = function(){
        if(this.x < 70)
        this.x +=65;
    } 
      
      this.right = function(){
        if(this.x > 470)
        this.x +=65;
      }
  
   }

   var player1 = new Player(carImg);

  //document events:

  document.addEventListener("keydown", function(e){
    switch(e.keyCode){
      case 37:
        player1.left();
        break;
      case 39:
        player1.right();
        break;
      }

    
   });
    
  }
  
};
