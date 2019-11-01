const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');
const car = new Car();

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    drawAll();
  };
}

console.log("I am connected")



// TODO/QUESTIONS:
// t: define startGame function
// ?explain window.onload function 
// ? why does drawing the car require a second click on the start button?