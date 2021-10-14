window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    window.requestAnimationFrame(loop);

  }

  function loop() {
    const canvas = document.querySelector("canvas")
    const road = new Road(canvas);
    const car = new Car(canvas)

    road.drawRoad();
    car.drawCar();
    window.addEventListener("keydown", event => {
      if (event.key === "ArrowRight") {
        car.setDirection(1);
      } else if (event.key === "ArrowLeft") {
        car.setDirection(-1);
      }
    })

    console.log("in Loop")

  }

};