window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#009200'
    ctx.fillRect(0,0,400,canvas.height)
  
    ctx.beginPath();
    ctx.fillStyle = 'grey'
    ctx.fillRect(30,0,340,canvas.height)

    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.fillRect(50,0,10,canvas.heigth)

    ctx.beginath();
    ctx.fillStyle = 'white'
    ctx.fillRect(340,0,10,canvas.heigth)

    for(x = 10; x<canvas.height;x+=50){
    ctx.beginpath()
    ctx.fillStyle='white'
    ctx.fillRect(190,x,10,30)
  }
  var imagen = new Image()
  
    }
  }
;
