window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //CANVAS CONTEXT
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  //ROAD BACKGROUND
  function background() {
    ctx.fillStyle = "green";              //green background
    ctx.fillRect(0, 0, 500, 700);
    ctx.fillStyle = "grey";               //grey background
    ctx.fillRect(40, 0, 420, 700);
    ctx.fillStyle = "white";              //left white line
    ctx.fillRect(50, 0, 10, 700);
    ctx.fillStyle = "white";              //right white line
    ctx.fillRect(440, 0, 10, 700);
    for (let i = 40; i < 700; i += 46){   //middle white line
      ctx.fillStyle = "white";
      ctx.fillRect(250, i, 5, 23);
    };
  };
    
  //CAR
  let car = {
      width: 60,
      height: 120,
      x: 220,
      y: 550,
      speed: 30
  };

  function carImage() {
    const carImg = new Image ();
    carImg.src = '../images/car.png';
    carImg.onload = function() {
    ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
    };
  };

  //BORDER
  function border() {
    if (car.x <= 60){
      car.x = 60;
    } else if (car.x >= 380) {
      car.x = 380;
    }
  }

  //KEYS
  function setKeys() {
    document.onkeydown = function(e) {
      switch (e.key) {
        case 'ArrowLeft': car.x -= 20;
          carImage()
          border()
          break;
        case 'ArrowRight': car.x += 20;
          carImage()
          border()
          break;
      };
    };
  };

  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
    background();
    carImage();
  };

  // START GAME
  function startGame() {
    setKeys(); 
    let interval = window.setInterval(updateCanvas, 40);
  };
};