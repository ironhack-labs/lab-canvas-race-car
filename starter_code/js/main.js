window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  // draw the road
  function startGame() {
    const HEIGHT = 600;
    const WIDTH = 400;
    const CENTER = 200;

    // green grass
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    // gray tarmac
    ctx.fillStyle = 'gray';
    ctx.fillRect(30, 0, 340, HEIGHT);
    // outer lines
    const OUTER_ROAD_LINE_FROM_EDGE = 45;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    /// left
    ctx.beginPath();
    ctx.moveTo(OUTER_ROAD_LINE_FROM_EDGE, 0);
    ctx.lineTo(OUTER_ROAD_LINE_FROM_EDGE, HEIGHT);
    ctx.stroke();
    /// right
    ctx.beginPath();
    ctx.moveTo(WIDTH - OUTER_ROAD_LINE_FROM_EDGE, 0);
    ctx.lineTo(WIDTH - OUTER_ROAD_LINE_FROM_EDGE, HEIGHT);
    ctx.stroke();
    // center line
    ctx.lineWidth = 5;
    // 10 white & grey pairs
    ctx.setLineDash([30, 30]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(CENTER, 0);
    ctx.lineTo(CENTER, HEIGHT);
    ctx.stroke();
  }
};

const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');
