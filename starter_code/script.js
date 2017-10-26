window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('race');
    var ctx = canvas.getContext('2d');
    paintRoad(ctx);
    paintLines(ctx);
  }

  function runRoad(context){

  }
  function paintRoad(context){
    // Green #1b8100 - GRAY #808080
    context.fillStyle = 'rgba(27, 129, 0, 1)'; // GREEN
    context.fillRect(0,0,450,490);
    context.fillStyle = 'rgba(128, 128, 128, 1)';
    context.fillRect(40,0,370,490);
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 10;
    context.strokeRect(60,-20,330,530);
  }
  function paintLines(context,mov){
    
    for (var x = 0; x < 500 ; x+=40){
      context.fillStyle = '#FFFFFF';
      context.fillRect(223,0+x,4,20); // Initial (223,0)
    }
  }
};
