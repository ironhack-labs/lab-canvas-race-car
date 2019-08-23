class Obstacle {
  constructor (game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.GRID_SIZE = 10;
    this.placeRandomlyOnGrid();
  }

  placeRandomlyOnGrid () {
    const GRID_SIZE = this.GRID_SIZE;
    const randomCoordinate = size => Math.floor(Math.random() * size);
    this.x = randomCoordinate(GRID_SIZE);
    this.y = randomCoordinate(GRID_SIZE);
  }

  paint () {
    const context = this.game.context;

    context.save();
    const SIZE = 50;
    context.fillStyle = 'red';
    context.fillRect(this.x * SIZE, this.y * SIZE, SIZE, SIZE);
    
    context.restore();
  }
}