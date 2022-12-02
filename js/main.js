const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "50px serif";

let intervalId,frames=0,score=0;
const arrObstacles = []