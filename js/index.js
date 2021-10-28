const canvas = document.getElementById('canvas') //Target canvas
const ctx = canvas.getContext ('2d') //Make the environment 2d


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Image(); //Create new image for the road
    road.src = "/images/road.png";

    road.onload = ()=>{ //Draw road on load
      ctx.drawImage (road, 0, 0, 500, 700)
    }

    const car = new Image() //Create new image for the car
    car.src = "/images/car.png"

    car.onload = ()=>{ 
      ctx.drawImage (car, 0, 0, 90, 135)
    }

  }
};
