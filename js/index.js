let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let start = new Start(canvas)
let car = new Car(canvas)
let road = new Road(canvas)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};
  
  function startGame() {
    road.draw();
    car.draw();
    start.randomLoop();
    
  }