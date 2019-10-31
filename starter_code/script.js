/*jshint esversion: 6 */


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    //lienas verdes
    ctx.fillStyle = '#008100';
    ctx.fillRect(0,0,40,canvas.height);
    ctx.fillRect(canvas.width - 40,0,40,canvas.height);
    //lienas verdes
    ctx.fillStyle = '#808080';
    ctx.fillRect(40,0,12,canvas.height);
    ctx.fillRect(canvas.width - 52,0,12,canvas.height);
    //centro gris
    ctx.fillRect(64,0,312,canvas.height);

    ctx.strokeStyle = '#fff';

    ctx.setLineDash([24, 22]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.lineWidth="6";
    ctx.moveTo(220,0);
    ctx.lineTo(220, 660);
    ctx.stroke();

  }
};




// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
// }
