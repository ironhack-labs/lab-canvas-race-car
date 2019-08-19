// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext ("2d");


  class Background{
    constructor(x,y,width,height,img){
      this.x =x;
      this.y = y;
      this.width= width;
      this.height = height;
      this.image = new Image();
      this.image.src = './images/ROAD.png';
  }
  draw(){
    this.y+=6;
     if(this.y < -canvas.height) this.y = 0; //reseteo de estado 
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height); 
  // dibujamos una segunda imagen al final de la primera
    ctx.drawImage(this.image,this.y + this.width,this.y,this.width,this.height);  
  }
  };

  class car{
    constructor(x,y,width,height,imgs){
    this.x =x;
    this.y = y;
    this.width= width;
    this.height = height;
    this.image = new Image();
    this.image.src = 'images/car.png'
  }
  draw(){
    
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
  }
  };

  const carrito = new car (185, 600, 50, 100);
  const fondo = new Background(0,0, canvas.width,canvas.height);

let frames = 0;
let interval = setInterval(function() {
  frames ++;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  fondo.draw();
  carrito.draw();

}, 1000 / 50);



  function startGame() {

  }

  addEventListener('keydown', function(event){
    if(event.keyCode === 32){
        carrito.y -= 80;
    }
    if (event.keyCode === 39){
      carrito.x +=20;
    }
    if (event.keyCode === 37) {
      carrito.x -=20;
    }
    if (event.keyCode === 38){
      carrito.y -=40;
    }
    if (event.keyCode === 40){
      carrito.y += 40;
    }
  })
// };





