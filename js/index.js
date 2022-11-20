window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // create the canvas and display the road , image in images foler, canvas HTML is in starter code  
   const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const background = new Image(); // make image
    const car = new Image(); // make image
    const images = [background, car]; // key 
    const count = images.length; 
    background.onload = car.onload = counter;
    background.src = '/images/road.png';
    car.src = '/images/car.png';
    background.onload = function() {
    ctx.drawImage(background, 10, 70, 500, 700)
    }
    let carX = 230;
    let carY = 620;
    car.onload = function() {
      ctx.drawImage(car, carX, carY, 50, 75)
    }
    function counter() {
      count--;
      if (count === 0) drawImages();
  } 

};
}


