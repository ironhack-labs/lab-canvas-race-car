window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d"); 
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  let x = 230
  let y = 500
  function startGame() {
    
    drawTheRoad()
    drawTheCar()
    
    

  }
  

  function drawTheRoad() {
    const road = new Image();
    road.onload = function(){
      ctx.drawImage(road,0,0,500,700)
    }
    road.src = './images/road.png'
  } 

  function drawTheCar() {
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, x, y, 40, 80)
    };
    img.src = './images/car.png'
  }

  function moveLeft() {
    x-= 20           
  }

  function moveRight() {
    x+= 20
  }

  function refreshCanvas(){
    ctx.clearRect(0,0,500,700)
    drawTheRoad() //Preparado para el movimiento de la carretera
    drawTheCar()
  }

  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft'){
      moveLeft()
    } else if (event.key === 'ArrowRight'){
      moveRight()
    }
    
    refreshCanvas()
  })
};
