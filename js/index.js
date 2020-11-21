window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillRect(0, 0, canvas.width, canvas.height);
    const road = {
      x: 0,
      y: 0,
      width: 500,
      height: 700,
    };
    const roadImg = new Image();
    roadImg.src = "../images/road.png";
    roadImg.addEventListener("load", () => {
      context.drawImage(roadImg, road.x, road.y, road.width,road.height); 
    });
    const car = {
      x: 200,
      y: 500,
      width: 90,
      height: 100,
    }
    const carImg= new Image();
    carImg.src= "../images/car.png";
    carImg.addEventListener("load", () => {
      context.drawImage(carImg, car.x, car.y, car.width,car.height); 
    });
  }
};
