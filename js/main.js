const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameFrames =0;
let obstacles = []
let obstacleInterval = 160;
let isGameOver = false;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};