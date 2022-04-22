document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.speedX -= 1;
      break;
    case "ArrowRight":
      player.speedX += 1;
      break;
  }
});
