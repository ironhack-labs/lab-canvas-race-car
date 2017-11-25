window.onload = function() {
  
  var ctx = getCanvas();
  var car = new Car(ctx);
  var road = new Road();

  document.getElementById("start-button").onclick = function() {
    startGame(ctx);
  };

  function startGame(ctx) {

    road.draw(ctx);
    car.drawCar(ctx);

  }

  document.addEventListener('keydown', (event) => {
    var key = event.key;
    car.move(key,ctx);
    clearCanvas(ctx);
    road.draw(ctx);
    car.drawCar(ctx);
  });
  

  
};

function getCanvas(){
  var canvas = document.getElementById('example');
  return canvas.getContext('2d');
}

function clearCanvas(ctx){
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
}



