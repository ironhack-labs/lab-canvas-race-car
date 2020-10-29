window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();

  };
  
  function startGame() {
    let carX = 218;
    let carY = 512;
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight'){
        //console.log("pulsaste derecha!");
        carX += 9;
        road.onload();
        car.onload();
      }else if(event.key === 'ArrowLeft'){
        //console.log("Pulsaste izquierda!");
        carX -= 9;
        road.onload();
        car.onload();

      }
    });
    //console.log("Hiciste click!");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const road = new Image();
    road.src = '../images/road.png';
    road.onload = () => {
      ctx.drawImage(road, 0 , 0, 500, 700);
    };
    const car = new Image();
    car.src = '../images/car.png';
    car.onload = () => {
      ctx.drawImage(car, carX, carY, 64, 128);
    };
  }
};
