

  function draw() {

    //canvas board
      ctx.fillStyle = "green";
      ctx.fillRect(5, 0, 500, 600);
      ctx.fillStyle = "grey";
      ctx.fillRect(50, 0, 400, 600);
      ctx.fillStyle = "white";
      ctx.fillRect(60, 0, 20, 600);
      ctx.fillRect(420, 0, 20, 600);

    //dash line
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.setLineDash([15, 6]);
      ctx.moveTo(250, 0);
      ctx.lineTo(250, 600);
      ctx.stroke();
  };

  function updateCanvas() {
    ctx.clearRect(0,0,1500,1700);
    draw();
    drawCar(car);
  };
