//when we click on the Start Game button, we need to create the canvas and display the road.
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const $canvas = document.querySelector("canvas");
    const ctx = $canvas.getContext("2d");
    img = new Image();
    img.src = "./images/road.png";
    ctx.drawImage(img, 90, 0);


    //iterattion 2

    imgCar = new Image();
    imgCar.src = "./images/car.png";
    ctx.drawImage(imgCar, 0, 0);
    // debugger

  }



};
