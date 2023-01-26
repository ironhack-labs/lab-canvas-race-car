/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const car = new Car(canvas.width / 2 - 40, canvas.height - 120, 80, 120, ctx);


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    
    startGame();
  };

  function startGame() {

    
    canvas.style.backgroundImage = "url('../images/road.png')";
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundSize ='cover'
    const game = new Game(ctx, canvas.width, canvas.height, car, canvas); 
    
    game.start(); 
 

  }
};


//Key Bindings
document.addEventListener('keydown', (e) => {

  switch(e.code){

      /* case 'ArrowUp':
          car.speedY -= 1;
          break;
          
      case 'ArrowDown':
          car.speedY += 1;
          break; */

      case 'ArrowRight':
          car.speedX += 1;
          break;
          
      case 'ArrowLeft':
          car.speedX -= 1;
          break;
          

      
  }
});


document.addEventListener('keyup', (e) => {

  car.speedX = 0;
  car.speedY = 0;
});
