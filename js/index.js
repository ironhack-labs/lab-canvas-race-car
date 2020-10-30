"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./images/road.png";
const carImg = new Image();
carImg.src = "./images/car.png";

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  function startGame() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(carImg, 225, 550, 50, 110);
  }
}
};
