window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    setInterval(updateKeuf,5)
  };
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");


  /* GENERATE OBSTACLES */

  var champi = {
    x: 145,
    y: 470,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }

  function draw(champi) {
    var img = new Image();
    img.onload = function() { 
       ctx.drawImage(img, champi.x, champi.y, 90, 90); 
    }
    img.src = "./images/t-acid_champi.png"
  }
  
 /* GENERATE OBSTACLES */

  var myKeufs = []
  var frames = 0

  function drawKeuf(keuf) {
    var imgKeuf = new Image();
    imgKeuf.onload = function() { 
      ctx.drawImage(imgKeuf, keuf.x, keuf.y, 80, 110); 
    }
    imgKeuf.src = "./images/police.png"
  }

  function updateKeuf () {
    myKeufs.forEach(function (keuf){
      keuf.y ++
    })
    updateCanvas();
    frames ++

    if (frames % (300 + Math.floor(Math.random() * 150)) === 0) {
      var keuf = {
        x: Math.floor(Math.random() * (400-80)),
        y: 0,
      }
      myKeufs.push(keuf);
    }
  }
  
   /* START GAME */

  function startGame() {
    ctx.fillStyle = "#7CFC00";
    ctx.fillRect(0,0,370,600);
    ctx.fillStyle = "#C0C0C0";
    ctx.fillRect(30,0,310,600);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(35,0,10,600);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(325,0,10,600);

    ctx.beginPath();
    ctx.setLineDash([20]);
    ctx.moveTo(185, 0);
    ctx.lineTo(185, 600);
    ctx.strokeStyle = "#FF00FF";
    ctx.lineWidth = 7;
    ctx.stroke();

    draw(champi);
    
    myKeufs.forEach(drawKeuf);

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 38: champi.moveUp();    console.log('up',    champi); break;
        case 40: champi.moveDown();  console.log('down',  champi); break;
        case 37: champi.moveLeft();  console.log('left',  champi); break;
        case 39: champi.moveRight(); console.log('right', champi); break;
      }
    }   

  }

  function updateCanvas() {
    ctx.clearRect(0, 0, 400, 800);
    ctx.fillText("Champi_x: " + champi.x, 580,40);
    ctx.fillText("Champi_y: " + champi.y, 580,60);
    startGame();
  }
};
