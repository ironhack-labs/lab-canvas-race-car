window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('road-board');
    var ctx = canvas.getContext('2d');
    var road = new Road([300, 600], [20, 10, 30, 5, 10], ["gray", "white", "green"]);
    console.log(road);
    drawRoad(ctx,road);
    drawCar(ctx,road);
  }

  function drawRoad(ctx,road) {


    // Draw road
    ctx.fillStyle = road.colors[0];
    ctx.fillRect(0, 0, road.size[0], road.size[1]);

    // Draw off road
    ctx.fillStyle = road.colors[2];
    ctx.fillRect(0, 0, road.elements[0], road.size[1]);
    ctx.fillRect(road.size[0] - road.elements[0], 0, road.size[0], road.size[1]);

    // Draw limits
    ctx.fillStyle = road.colors[1];
    ctx.fillRect(road.elements[2], 0, road.elements[1], road.size[1]);
    ctx.fillRect(road.size[0] - road.elements[2] - road.elements[1], 0, road.elements[1], road.size[1]);

    // Draw center line
    ctx.fillRect((road.size[0] - road.elements[3]) / 2, 0, road.elements[3], road.size[1]);

    // Complete center line
    ctx.setLineDash([10, 5]);
    ctx.moveTo(road.size[0] / 2, 0);
    ctx.lineTo(road.size[0] / 2, road.size[1]);
    ctx.lineWidth = road.elements[3] + 5;
    ctx.strokeStyle = road.colors[0];
    ctx.stroke();

  }

  function drawCar(ctx,road) {
    var carImage = new Image();

    carImage.onload = function() {
      ctx.drawImage(carImage, (road.size[0]/2)-40, (road.size[1]-510), 80, 50);
    };
    carImage.src = "./images/car.png";
  }

};




/*
size: [width, height]
elements: [green line width, white line width, white line position,center line width, center line gap];
colors: [road, lines, off road]
*/
