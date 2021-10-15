"use strict";

import Road from "./road.mjs";
import Player from "./player.mjs";
import Obstacles from "./obstacles.mjs";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.obstacles = []; // to create obstacles
    this.isGameOver = false;
  }
}