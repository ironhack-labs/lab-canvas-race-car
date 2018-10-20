window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

  function startGame () {
    drawGameBoard();
    drawCar();
  };

  function drawGameBoard() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillRect(30, 30, 400, 1000);
        ctx.fillStyle = "grey";
        ctx.fillRect (80,30,300,1000);
        ctx.fillStyle = "white";
        ctx.fillRect (85, 10, 10, 1000);
        ctx.fillStyle = "white";
        ctx.fillRect (365, 10, 10, 1000);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 10, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 50, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 90, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 130, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 170, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 210, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 250, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 290, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 330, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 370, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 410, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 450, 5, 25);
        ctx.fillStyle = "white";
        ctx.fillRect (225, 490, 5, 25);
        
      };
      
      /* function userCar(){
        var img=document.getElementById("car");
        ctx.drawImage(img,10,10,150,180);
      }; */

      function drawCar(){
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 200, 400,50,80);
        };
        img.src = "./images/car.png";
      }
   