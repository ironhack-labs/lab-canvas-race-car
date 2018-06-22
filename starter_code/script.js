var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};
//constantes
var interval;

//clases
function TallCube(x,y,width,height,color){
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  this.color = color ? color : "white";
  // this.direction = "right";

  this.draw = function(){
    ctx.beginPath();
    // ctx.moveTo(this.x,this.y);
    ctx.fillStyle = this.color; 
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  
};

function DottedLines(x,y,width,height,color){
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  this.color = color ? color : "white";
  this.direction = "right";

  this.draw = function(){
    
    // if (this.direction === "down") {
    //   this.y++;
    //     if(this.y > 650) this.direction = "up";
    // } else {
    //   this.y--;
    //   if(this.y < 50) this.direction = "down";
    // }
    
    ctx.beginPath();
    // ctx.moveTo(this.x,this.y);
    ctx.fillStyle = this.color; 
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

   
  
    function Image(imagen,x,y,width,height){
      this.x = x ? x : 0;
      this.y = y ? y : 0;
      this.width = width ? width : 0;
      this.height = height ? height : 0;
     this.image = 0;
     
     this.draw = function(){
       
     }
     imagen.src="images/car.png"
     imagen.onload = function(){
     ctx.drawImage(this.imagen,this.x,this.y,this.width,this,height);
     }; 
   }

//animation




};

//instancias primer cuadrado
var greenPartL = new TallCube(0,0,30,700,"green");
var greenPartR = new TallCube(320,0,30,700,"green");
var charcoalRoad = new TallCube(30,0,290,700,'grey');
var whiteLine = new TallCube(50,0,10,700,"white");
var whiteLineR = new TallCube(290,0,10,700,"white");



var zag = new DottedLines(160,20,30,50,"white");
var zag2 = new DottedLines(160,100,30,50,"white");
var zag3 = new DottedLines(160,190,30,50,"white");
var zag4 = new DottedLines(160,280,30,50,"white");
var zag5 = new DottedLines(160,370,30,50,"white");
var zag6 = new DottedLines(160,460,30,50,"white");
var zag7 = new DottedLines(160,550,30,50,"white");
var zag8 = new DottedLines(160,640,30,50,"white");

var imagen = new Image();

greenPartL.draw();
greenPartR.draw();
charcoalRoad.draw();
whiteLine.draw();
whiteLineR.draw();


    zag.draw();
    zag2.draw();
    zag3.draw();
    zag4.draw();
    zag5.draw();
    zag6.draw();
    zag7.draw();
    zag8.draw()




// instancias segundo

//main functions


// listeners