window.onload = function() {

  var canvas = document.getElementById('road-board');
  var ctx = canvas.getContext('2d');
  var road = new Road([300, 600], [20, 10, 30, 7, 10], ["gray", "white", "green"]);
  var car = new Car((road.size[0] / 2) - 30, road.size[1]-120, 60, 100);
  console.log(road.size[1]);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  window.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        if (car.x > 0) {
          car.moveLeft();
        }
        break;
      case 39:
        if ((car.x + car.width) < road.size[0]) {
          car.moveRigth();
        }
        break;
      default:
    }
    updateCanvas();
  };

  function startGame() {
    console.log(road);
    drawRoad();
    drawCar();
  }

  function drawRoad() {
    // Draw road
    ctx.fillStyle = road.colors[0];
    ctx.fillRect(0, 0, road.size[0], road.size[1]);


    // Draw off-road
    ctx.fillStyle = road.colors[2];
    ctx.fillRect(0, 0, road.elements[0], road.size[1]);
    ctx.fillRect(road.size[0] - road.elements[0], 0, road.elements[0], road.size[1]);

    // Draw limits
    ctx.fillStyle = road.colors[1];
    ctx.fillRect(road.elements[2], 0, road.elements[1], road.size[1]);
    ctx.fillRect(road.size[0] - road.elements[2] - road.elements[1], 0, road.elements[1], road.size[1]);

    // Draw center line
    ctx.setLineDash([40, 30]);
    ctx.moveTo(road.size[0] / 2, 0);
    ctx.lineTo(road.size[0] / 2, road.size[1]);
    ctx.lineWidth = road.elements[3];
    ctx.strokeStyle = road.colors[1];
    ctx.stroke();
  }

  function drawCar() {
    var carImage = new Image();
    carImage.onload = function() {
      ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
    };
    carImage.src = "./images/car.png";
  }

  function clearCanvas() {
    drawRoad();
  }

  function updateCanvas() {
    clearCanvas();
    drawCar();
  }


};




/*
size: [width, height]
elements: [green line width, white line width, white line position,center line width, center line gap];
colors: [road, lines, off road]
*/
