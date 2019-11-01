class Track {
  constructor(game) {
    this.game = game;
  }

  paintTrack() {
    let ctx = this.game.ctx;
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
    ctx.setLineDash([30, 30]); /*dashes are 30px and spaces are 30px*/
    ctx.beginPath();
    ctx.moveTo(CENTER, 0);
    ctx.lineTo(CENTER, HEIGHT);
    ctx.stroke();
  }
}
