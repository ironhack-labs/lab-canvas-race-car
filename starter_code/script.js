window.onload = function() {
  const $canvas = document.querySelector('canvas');
  const context = $canvas.getContext('2d');
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function drawBoard() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 550, 800);

    context.fillStyle = 'gray';
    context.fillRect(20, 0, 510, 800);

    context.strokeStyle = 'white';
    context.beginPath();
    context.lineWidth = 10;
    context.moveTo(40, 0);
    context.lineTo(40, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 10;
    //context.strokeStyle = 'white';
    context.moveTo(510, 0);
    context.lineTo(510, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.setLineDash([25, 20]);
    context.lineWidth = 5;
    context.moveTo(275, 0);
    context.lineTo(275, 800);
    context.stroke();
    context.closePath();

    const carImageUrl = './images/car.png';
    const carImage = new Image();
    carImage.src = carImageUrl;
  }

  function startGame() {
    //console.log('im running');
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    drawBoard();
  }
};
