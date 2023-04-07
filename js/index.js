const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");

const startScreen = document.querySelector(".game-intro");

window.onload = () => {
  // hide the canvas until we press the start
  canvas.style.display = "none";

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("start game");
    startScreen.style.display = "none";
    canvas.style.display = "block";
  }
  // load road image
  const roadImg = new Image();
  roadImg.src = "images/road.png";
  roadImg.onload =() => {
  // draw road, loop
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(roadImg, 0, -canvas.height, canvas.width, canvas.height);
  };
  // load car image
const carImg = new Image();
carImg.src = "images/car.png";
carImg.onload = () => {
  // draw, car image position
const carWidth = 50;
const carHeight = 100;
let carX = canvas.width / 2 - carWidth / 2;
let carY = canvas.height - carHeight -20;
ctx.drawImage(carImg, carX, carY, carWidth, carHeight);
// keyboard controls
document.addEventListener("keydown", (event) =>{
  switch(event.code){
    case "ArrowLeft":
      if (carX >= 50){
        carX -=10;
      }
    break;
    case "ArrowRight":
      if (carX <= canvas.width - carWidth -50) {
        carX += 10;
      }
    break;
  }
 ctx.clearRect(0,0,canvas.width,canvas.height);
 ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
 ctx.drawImage(roadImg, 0, -canvas.height, canvas.width, canvas.height); 
 ctx.drawImage(carImg, carX, carY, carWidth, carHeight); 
});
};
}
