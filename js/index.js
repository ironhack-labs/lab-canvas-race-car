let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    draw();
    
    drawCar();

    
  }

   class car {
     constructor(){
       this.X = 25
       this.Y = 25

     
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }

}

 car = new car();

document.addEventListener('keydown', e => {
  switch (e.keyCode) {

    case 37: car.moveLeft(); 
    case 39: car.moveRight(); 
  }
  updateCanvas();
})

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("car_x: " + car.x, 580,40);
  ctx.fillText("car_y: " + car.y, 580,60);
  
  
}

updateCanvas()
     

    

  function drawCar(){
    let carX = 220;
    let carY = 600;
    let carImg = new Image();
    carImg.src = 'images/car.png'
    carImg.onload= ()=>
    ctx.drawImage(carImg, carX, carY, 60, 100);
    

  }



  

  
  function draw() {    
    //green
    ctx.fillStyle = 'green'
    ctx.fillRect(30, 50 , 30, 700)
    //gray
    ctx.fillStyle = 'gray'
    ctx.fillRect(50, 50 , 10, 700)
    //big rectangule gray
    ctx.fillStyle = 'gray'
    ctx.fillRect(80, 50 , 350, 700)
    //right side 
    ctx.fillStyle = 'gray'
    ctx.fillRect(450, 50 , 10, 700)
    //green right side
    ctx.fillStyle = 'green'
    ctx.fillRect(460, 50 , 20, 700)

    // lineas calle
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 100 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 200 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 300 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 400 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 500 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 600 , 5, 20)
    ctx.fillStyle = 'white'
    ctx.fillRect(250, 700 , 5, 20)
  
  }

};
