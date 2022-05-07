window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d")
  const img1 = new Image();
  img1.src = "images/road.png";
  img1.onload = () => {
  ctx.drawImage(img1,50, 10,390, 590 )}
  const img2 = new Image();
  img2.src = "images/car.png";
  img2.onload = () => {
  ctx.drawImage(img2,200, 400,80, 180 )}

  class Car {
    constructor() {
      this.x = 200;
      this.y = 400;
    }
    
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.img1,50, 10,390, 590 )
      ctx.drawImage(this.img2, this.x, this.y, 80, 180);
    }
  }
  
  const car = new Car();
  
  document.addEventListener('keyright', (e) => {
    switch (e.keyCode) {
      
      case 37:
        car.moveLeft();
        console.log('left', car);
        break;
      case 39:
        car.moveRight();
        console.log('right', car);
        break;
    }
    updateCanvas();
  });
  
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
    ctx.fillText('Car_x: ' + car.x, 580, 40);
    ctx.fillText('Car_y: ' + car.y, 580, 60);
  
    car.draw();
  } 
  updateCanvas()}

}
  
  



/*
document.body.onkeydown = (e) => {
  
  switch(e.key){
      case 'ArrowLeft':
        img2.offsetLeft--;
      break;
      case 'ArrowRight':
        img2.offsetTop++;
      break;
      
  }
}

*/

