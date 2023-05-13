window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const roadImg = new Image();
    roadImg.src = "./images/road.png"
    roadImg.onload = function(){
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);  
    }
  
    const carImg = new Image();
    carImg.src = "./images/car.png";
    const carX = canvas.width / 2 - 25;
    const carY = canvas.height - 100;
    carImg.onload = function(){
      ctx.drawImage(carImg,carX,carY,50,100);
    }
  }
};
