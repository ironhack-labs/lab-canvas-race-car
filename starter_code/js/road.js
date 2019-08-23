/* eslint-disable no-undef */

class Road {
  constructor(game) {
    this.game = game;
  }

  paintRoad() {
  this.game.context.fillStyle = 'green';
  this.game.context.fillRect(0, 0, 20, 500);

  this.game.context.fillStyle = 'grey';
  this.game.context.fillRect(20, 0, 10, 500);

  this.game.context.fillStyle = 'grey';
  this.game.context.fillRect(40, 0, 370, 500);

  this.game.context.fillStyle = 'grey';
  this.game.context.fillRect(420, 0, 10, 500);

  this.game.context.fillStyle = 'green';
  this.game.context.fillRect(430, 0, 20, 500);


  this.game.context.strokeStyle = 'white';
  this.game.context.beginPath();
  this.game.context.lineWidth = 5;
  this.game.context.moveTo(225, 0);
  this.game.context.lineTo(225, 500);
  this.game.context.setLineDash([25, 30]);
  this.game.context.stroke();
  this.game.context.closePath();
  }
  }