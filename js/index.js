window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
} 


 

  function startGame() {

    let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let roadImage = document.createElement("img")
roadImage.src= "images/road.png";
ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
let carImage = document.createElement("img")
    carImage.src = "images/car.png";
    ctx.drawImage(carImage, 215, 500, 60, 110 );

 }






