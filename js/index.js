window.onload = () => {
  let imgRoad = new Image();
  imgRoad.src = "./images/road.png";
  let imgCar = new Image();
  imgCar.src = "./images/car.png";
  let crash = new Audio();
  crash.src = './images/NFF-car-hit.wav';

  
  document.getElementById('start-button').onclick = () => {
    setInterval(startGame, 17);
  };

  let carX = 225;


  document.addEventListener('keydown', function(e){ 
    movement(e.keyCode);  
  });


  function movement(keycode){
 
      switch (keycode){

        case 37 :
          carX <= 0 ?
          carX +=10 :
          carX -=10;
          break;
  
        case 39 :
          carX >= 450 ?
          carX -=10 :
          carX +=10;
          break;  
      }
  }

  let listOfObstacles = [];
  let frames = 500;
  let counter = 0;

  function createObstacle(param){

    let randomWidth = Math.random() * 380 - 60;
    let randomX = (Math.random() * 380 + 60) - randomWidth;
    let y = 0;
    
    let obstacle = {
      width: randomWidth,
      x: randomX,
      y:y
    }

   listOfObstacles.push(obstacle);

  };

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');

  function startGame() { 
    ctx.clearRect(0, 0, 500, 700)
    ctx.drawImage(imgRoad,0,0,500,700); 
    ctx.drawImage(imgCar,carX,550,50,100); 
    console.log('hi')
    crash.play();
    
    listOfObstacles.forEach((obstacle, i) => {
      obstacle.y += 1
      ctx.beginPath();
      ctx.fillRect(obstacle.x,obstacle.y,obstacle.width,30);
      })
    
    if(counter % frames === 0) {
      createObstacle(ctx);
      console.log('funciona')
    }
    counter += 1
  }
};
