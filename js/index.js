window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    setInterval(0, 300)
  };

  function startGame() {
    game.init ()
    car.init()
    
  }
  
};

const game = {
  canvas: document.getElementById('canvas'),
  init: function() { 
    this.context = this.canvas.getContext("2d");
    let context = this.context
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 0, 0, 500, 700);
    };
    img.src = "../images/road.png"; 
  },
}

const car = {
  canvas: document.getElementById('canvas'),
  init: function() { 
    this.context = this.canvas.getContext("2d");
    let context = this.context
    const img = new Image();
    img.onload = function() {
      context.drawImage(img, 200, 550, 100, 100);
    };
    img.src = "../images/car.png"; 
  },
}


function moveCard (){
  document.onkeydown = function(move) {
    switch (move.key) {
      case 'a': 
        a.speedY = 15;
        break;
      case 'd': 
        d.speedY = -15;
        break;
    }
  };
}

var Car = {
  a: 25,
  d: 25,
  moveLeft:  function() { this.a -= 25 },
  moveRight: function() { this.d += 25 },
}
function moved (){
document.onkeydown = function(e) {
    switch (e.Car) {
      case 37: Car.moveLeft();  console.log('a',  Car); break;
      case 39: Car.moveRight(); console.log('d', Car); break;
    }
    updateCanvas();
  }
}







startGame()