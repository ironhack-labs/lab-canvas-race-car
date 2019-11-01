class Stripes {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.stripesArray = [];
  }

  generateStripes() {
    for (let i = 0; i < 10; i++) {
      let stripe = 10 + i * 50;
      this.stripesArray.push(stripe);
    }
  }

  drawStripes() {
    for (var stripe of this.stripesArray) {
      this.context.fillRect(245, stripe, 5, 30);
    }
  }

  moveStripes() {
    for (var i = 0; i < this.game.stripes.stripesArray.length; i++) {
      if (this.game.stripes.stripesArray[i] > 500) {
        this.game.stripes.stripesArray[i] = -20;
      } else {
        this.game.stripes.stripesArray[i] += this.game.steps;
      }
    }
  }
}
