
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
//const height = context.canvas.height;
//const width = context.canvas.width;

const game = new Game($canvas)


  document.getElementById("start-button").onclick = function() {
    game.startGame();
  };

 /* document.getElementById("reset-button").onclick = function (){
    console.log("its clicking!")
    game.reset();
  }
  */

/*
  document.getElementById("reset-button").onclick = function (){
    console.log("its clicking, baby!")
    game.reset();
  }
  */





//window.requestAnimationFrame (timestamp => console.log(timestamp));


/*


*/

