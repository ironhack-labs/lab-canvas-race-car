const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let background = new Image();
background.src = "../images/road.png";

let car = new Image();
car.src = "../images/car.png";



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(background,0,0,500,700);
    ctx.drawImage(car,0,0,50,50); 
     

  }
};

