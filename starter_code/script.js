window.onload = function() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  function draw() {
      // ctx.fillRect(25, 25, 100, 100);
      // ctx.clearRect(45, 45, 60, 60);
      //ctx.strokeRect(50, 50, 50, 50);
      ctx.fillStyle = "green";
      ctx.fillRect(5, 0, 500, 600);
      //ctx.clearRect(5, 5, 400, 500);
      // ctx.strokeRect(5, 0, 400, 500);
      ctx.fillStyle = "grey";
      ctx.fillRect(50, 0, 400, 600);
      ctx.fillStyle = "white";
      ctx.fillRect(60, 0, 20, 600);
      ctx.fillRect(420, 0, 20, 600);

      ctx.beginPath();
      ctx.setLineDash([15, 6]);
      ctx.moveTo(250, 0);
      ctx.lineTo(250, 600);

      ctx.stroke();
      ctx.fillStyle = "white";
      var img = new Image();   // Create new img element
      img.src = './images/car.png';
      imgScale = 158/319;
      img.onload = function() {
      ctx.drawImage(img, 225, 500, 100*imgScale, 100);
    }



//     imgScale = 640/480;
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0,150*imgScale,150);
//   };

  }

  draw();



  document.getElementById("start-button").onclick = function() {
    var buttonStart = $("#start-button");
    //$("#game-board").addClass("is-visible");
    startGame();
  };

  function startGame() {

    // var buttonStart = $("#start-button");
    // $("#game-board").addClass(".is-visible");

    }
};
