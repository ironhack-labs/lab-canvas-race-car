var interval;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }; 

    
  
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');


  //CONSTRUCTOR
  function Fondo(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "./images/Screen Shot 2018-06-21 at 6.05.11 PM.png"
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    
    this.draw = function(){
      // if(this.x < -this.width) {this.x = 0};      
      if(this.y > this.height) {this.y = 0};
      
      ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
      // ctx.drawImage(this.img,this.x + this.width, this.y, this.width,this.height);
      ctx.drawImage(this.img,this.x, this.y - this.height, this.width,this.height);
    // } this is the key for the  this.draw function
     
    this.goDown = function(){
      this.y += 1;
    }
    
    this.goRight = function(){
      this.x +=1;
    }
  }
    
  }
  function Objeto() {
    this.x = 115 
    this.y = 425;
    this.width = 50;
    this.height = 70;
    this.img = new Image();
    this.img.src = "./images/car.png"
    // this.directiony = 'down';
    this.directionx = 'right';
  
    this.draw = function(){
      ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
  
      if(this.directionx === 'right'){
        // this.x++;
        if(this.x > 195) this.directionx = 'left';
      } else {
        // this.x--;
        if(this.x < 1) this.directionx = 'right';
      }
      
    }
  } 
  

//INSTANCIAS
  var fondito = new Fondo();
  var auto = new Objeto();

  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    fondito.goDown();
    fondito.draw();
    auto.draw();
  }

  function startGame() {
   interval = setInterval(update,1000/100)
}

// document.getElementById('start-button').addEventListener('click', startGame);


addEventListener('keydown', function(e){
  switch(e.keyCode){

    case 39: 
    // auto.directionx = 0;
    auto.directionx = 'right';
    auto.x = auto.x + 10;
    break;
    case 37:
    // auto.directionx = 0;
    auto.directionx = 'left';
    auto.x = auto.x -10;
    break;


  }
})

}