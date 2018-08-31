window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
  
    function drawRoadGreen() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="#3b821e";
        ctx.fillRect(0, 0, 450, 700);
    }
  
    drawRoadGreen(); 
  
    function drawRoadGrey() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="#808080";
        ctx.fillRect(40, 0, 320, 700);
    }
    
    drawRoadGrey(); 
  
  
    function drawWhiteLine1() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="white";
        ctx.fillRect(40, 0, 320, 700);
    }
    
    drawWhiteLine1(); 
  
    function drawRoadGrey1() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="#808080";
        ctx.fillRect(40, 0, 150, 700);
    }
    
    drawRoadGrey1(); 
  
    function drawRoadGrey2() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="#808080";
        ctx.fillRect(200, 0, 160, 700);
    }
    
    drawRoadGrey2(); 
  
    function drawWhiteLine3() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="white";
        ctx.fillRect(50, 0, 10, 700);
    }
    
    drawWhiteLine3();
  
    function drawWhiteLine4() {
      var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle="white";
        ctx.fillRect(340, 0, 10, 700);
    }
    
    drawWhiteLine4();
  

  }
};

/*   function drawCar(car) {
    var img = new Image();
    img.onload = function() {
       ctx.drawCar(img, car.x, car.y, 50, 50);
    }
    img.src = /Users/Jyou/Desktop/IH/lab-canvas-race-car-master2/starter_code/images/car.png;
  }

  drawCar(car); */