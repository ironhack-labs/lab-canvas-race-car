document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowRight":
      car.moveRight();
      break;
    case "ArrowLeft":
      car.moveLeft();
      break;
  }
  updateGameArea();
});
