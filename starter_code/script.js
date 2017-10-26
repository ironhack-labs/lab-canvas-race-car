window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };





  function startGame() {
    var canvas = document.getElementById('canvasss');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(54, 122, 44)';
    ctx.fillRect(50, 0, 200, 150);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(70, 0, 160, 150);

    ctx.fillStyle = 'rgb(252, 252, 252)';
    ctx.fillRect(75, 0, 5, 150);

    ctx.fillStyle = 'rgb(252, 252, 252)';
    ctx.fillRect(220, 0, 5, 150);

    ctx.fillStyle = 'rgb(252, 252, 252)';
    ctx.fillRect(148, 0, 5, 150);

    // LINEAS
    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 2, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 12, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 22, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 32, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 42, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 52, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 62, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 72, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 82, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 92, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 102, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 112, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 122, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 132, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 142, 5, 5);

    ctx.fillStyle = 'rgb(177, 187, 209)';
    ctx.fillRect(148, 152, 5, 5);

    var img = new Image();
      imgScale = 640/480;
      img.onload = function() {
        ctx.drawImage(img, 131, 90, 30*imgScale,30);
      };
      img.src = 'images/car.png';




}




// #b1bdd1 gris



};
