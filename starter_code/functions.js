  function getCanvas(){
    var canvas = document.getElementById('example');
    ctx = canvas.getContext('2d');
  }

  function clearCanvas(){
    ctx = getCanvas();
    ctx.clearRect(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
  }