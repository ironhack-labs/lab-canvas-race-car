
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  function camino() {
    
    
      ctx.fillStyle = "green";
      ctx.fillRect(800, 5, 650, 800);
      ctx.fillStyle = "grey";
      ctx.fillRect(840, 5, 420, 800);
      ctx.fillStyle = "white";
      ctx.fillRect(860, 5, 10, 800);
      ctx.fillStyle = "white";
      ctx.fillRect(1230, 5, 10, 800);
    }
  
  camino();
  
  function Linea(y) {
    this.x = 1050;
    this.y = y;
      this.draw = function(){
        this.y += 10;
        if(this.y > canvas.height) this.y = 0;
        ctx.fillRect(this.x,this.y,8, 50);
      };
  
  
  }
  
  Linea();
  
  var lineas = [];
  
  for (var i = 0; i < canvas.height; i+= 80){
    lineas.push(new Linea(i));
  }
  
  function drawLines(){
  
      lineas.forEach(function(lupe){
        lupe.draw();
      })
  
  }
  
  
  
  
  
  
  
  
  function upDate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    camino();
    drawLines();
    newCar.draw();
  }
  
  
  function Car() {
  
   
    this.x = 995;
    this.y = 690;
    this.width = 120;
    this.height = 100;
    this.img = new Image();
    this.img.src = "./images/car.png"
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  
      this.draw = function(){
        ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
      }
  
    this.moveLeft = function(){
      this.x -= 10;
    }
    this.moveRight = function(){
      this.x += 10;
    }
  
    this.update = upDate;
  
  }
  
  var newCar = new Car();
  
  
  addEventListener("keydown",function(e){
    if(e.keyCode === 37 ){
  
      newCar.moveLeft();
      
      setInterval(newCar.update, 2000/1800 );
     
    }else if(e.keyCode === 39 ){
      
      newCar.moveRight();
      setInterval(newCar.update, 2000/1800);
    } 
  });
  
  
  
  
  