const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

// draw car and background
const car = {
  x: 217,
  y: 550,
  width: 60,
  height: 110
};
const carImg = new Image();
carImg.src = `./images/car.png`;



  const drawBackAndCar = () => {
    const backgroundImg = new Image();
    backgroundImg.src = `./images/road.png`;
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    context.drawImage(carImg, car.x, car.y, car.width, car.height);
    
  }



  function startGame() {
    clearAll();
    drawBackAndCar();

    requestAnimationFrame(startGame);
  }


  //move car
  document.addEventListener(`keydown` , event => {
    switch (event.key){
      case `ArrowLeft`:
        if(car.x >= 65)
        car.x -= 10;
        break;
      case `ArrowRight`:
        if(car.x <= 380)
        car.x += 10;
        break;
      default:
        console.log(`You can use only left and right arrows`);
    }
    });

    //function to clear canvas
    const clearAll = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    // start game function