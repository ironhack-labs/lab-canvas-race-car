
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext ('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Image();
    road.src = "/images/road.png";
    road.onload = ()=>{
      ctx.drawImage (road, 0, 0, 500, 700);
    }
    const car = new Image();
      car.src = "/images/car.png";
      car.onload = () => {
        ctx.drawImage (car, 225, 575, 50, 100);
      }
    }
  }