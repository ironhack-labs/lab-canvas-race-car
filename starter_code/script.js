window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  const canvas = document.getElementById("road");
  const road = canvas.getContext("2d");
  
  road.translate(150, 600);
  
  function render () {
  //estrada
  road.fillStyle = "green";
  road.fillRect(-150, 0, 300, -600 )
  road.fillStyle = "grey";
  road.fillRect(-130, 0, 260, -600 )
  road.strokeStyle = "white";
  road.lineWidth = 4; 
  road.strokeRect(-120, 20, 240, -640)

  for (let i =0; i < 900; i += 15) {
    if (i % 2 === 0 ) {
    road.moveTo(0, -i)
    road.lineTo(0, - i - 10)
    }
  }
  road.stroke();
};

const car = new Car("images/car.png", road);

car.draw()

const obstacle = 



  function startGame() {
    //colocar windown.update aqui
  }
  window.addEventListener('keydown', (e) => {
    // Left arrow key.
    if (e.keyCode === 37) {
      car.turnLeft();
    }
    // Right arrow key.
    if (e.keyCode === 39) {
      car.turnRight();
    }    
});
setInterval (function(){render(); car.draw()}, 5);
}


