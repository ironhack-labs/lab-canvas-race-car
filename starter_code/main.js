const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');
const game = new Game($canvas);


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    game.start();
  };
}

console.log("I am connected")



// TODO/QUESTIONS:
// ? why does drawing the car require a second click on the start button?