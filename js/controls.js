document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
  }
});
