/**
 * Many features of this game are hard-coded for simplicity.
 * To see better examples of my use of abstraction, encapuslation,
 * and object-oriented programming principles, please visit:
 * https://fischerjack.github.io/beat-project/index.html
 */



let car = new Car('./images/car.png');
let road = new Road();
let controller = new gameController(road, car);


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    controller.updateGameFrame();
  };
};
