document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowRight":
      car.moveRight();
      break;
    case "ArrowLeft":
      car.moveLeft();
      break;
  }
});

/*
// We want to decelarate the speed when we take the finger of the key:
document.addEventListener("keyup", (e) => {
  player.speedX = 0;
  player.speedY = 0;
});
*/
