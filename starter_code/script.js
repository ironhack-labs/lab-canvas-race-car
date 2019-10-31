window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
}
  
  function startGame() {
    setInterval(() => {
      ctx.clearRect(0, 0, w, h);

//draw
createRoad();
createCar();  
//move
window.onkeydown = e => {
  switch (e.key) {
    case "ArrowRight":
     px += speed;
      if (px > w - 120) {
        px = w - 120;
      }
      break;
    case "ArrowLeft":
      px -= speed;
      if (px < 50) {
        px = 50;
      }
      break;
    
  }
}
//obstacles
//collitions
//counter
 counter++
  }, 1000/60);
}
