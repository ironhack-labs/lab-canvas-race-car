window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.getElementById('canvas');

    const c = canvas.getContext('2d');
    let deltaX = 0;
    car_image = new Image();
    car_image.src = '/ironHack/lab-canvas-race-car/images/car.png';
    background_image = new Image();
      background_image.src = '/ironHack/lab-canvas-race-car/images/road.png';

    const background = () => {
        c.drawImage(background_image, 0, 0, 500, 900)
    }

    const car = () => {
      c.drawImage(car_image, 200 + deltaX, 700, 100, 150)
    }

    background();
    car();

    window.addEventListener("keydown", moveSomething, false);

    function moveSomething(e) {
      switch(e.keyCode) {
          case 37:
              deltaX -= 4
              break;
          case 39:
              deltaX += 4
              break;
      }
      c.clearRect(0,0,canvas.width,canvas.height)
      background();
      car()
    }
  }
};
