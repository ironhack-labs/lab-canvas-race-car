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
//obstacles
//collitions
//counter
 counter++
  }, 1000/60);
}
