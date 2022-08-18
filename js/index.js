const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext("2d");

const app = new App();
const car = new Car();


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    setInterval(() => {
      // EL CORAZON DE LA APP
      app.startGame();
      car.draw()
    }, 1000 / 60) *


      window.addEventListener('keydown', (event) => {

        switch (event.key) {
          case "ArrowLeft":
            car.moveLeft()
            break;
          case "ArrowRight":
            car.moveRight()
            break;
        }
        car.draw()
        app.updateCanvas()

      })


  };



};
