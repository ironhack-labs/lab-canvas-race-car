"use strict";

import Road from "./road.mjs";
import Player from "./player.mjs";
import Obstacle from "./obstacle.mjs";

class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.road;
    this.player;
    this.obstacles = []; // to create obstacles
    this.isGameOver = false;
    //this.frame = 0; // keep track of frame count of our animation loop, add any periodic triggers to our game
    this.frame = 0; // keep track of frame count of our animation loop, add any periodic triggers to our game
  }

  startAnimateLoop () {
    // create road - class Road()
    this.road = new Road(this.canvas);
    // create player - class Player()
    this.player = new Player(this.canvas);
    
    const animate = () => {
      if (this.frame % 60 === 0) { // every 60 frames
        //let minWidth = this.canvas.width * .05; //500 * .05 --> 25
        //let maxWidth = this.canvas.width * .9; // 500 * 0.9 --> 450;
        // requestAnimationFrame --> runs before the next time the browser repaint
        // browser runs a repaint 60 times per second
        // create obstacles  { 

        this.obstacles.push(new Obstacle(this.canvas));
        // create obstacles 1.8times per second
      }    

      // handle obstacles behind the player and gameover
      this.checkAllCollisions(); 
      // 1- set new positions of player, road, obstacles
      this.updateCanvas(); 
      // 2- clear all the canvas between every frame animation
      this.clearCanvas(); 
      // 3- draw
      this.drawCanvas(); 
      if (!this.isGameOver) {
        // call itself to create the animation
        window.requestAnimationFrame(animate);
      }
      this.frame++; // for every animation, the frames increments
    };
    
    window.requestAnimationFrame(animate);
  }
  // update/set positions
  updateCanvas() {
    this.road.update();
    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
    this.player.update();
  }
  //clear canvas before draw
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // draw
  drawCanvas() {
    this.road.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
    this.player.draw();
  } 

  // handle collisions
  checkAllCollisions () {
    // check player is inside the board game
    this.player.checkScreen();

    this.obstacles.forEach((obstacle, index) => {
      if (this.player.checkCollisionObstacle(obstacle)) {
        this.player.loseLive();
        const bang = new Image();
        bang.scr = '../images/bang.png';
        this.ctx.drawImage(bang, this.player.x, this.player.y, 40, 40);
        this.obstacles.splice(index, 1);
        if(obstacle.bottom > this.canvas.height) {
          this.obstacles.splice(index,1);
        }
        if (this.player.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
        
      }
      else {
        console.log("score" ,this.player.score)
        this.player.increaseScore();
      }
      //if (obstacle.x < this.player.x - 5) {
      //  this.obstacles.splice(index, 1);
      //}
    });
  }
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}

export default Game;