// Board constructor function
function Board() {
    var canvas = document.getElementById('board');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle ='grey';
    ctx.fillRect(0, 0 , 600, 1200);

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 40, 1200);
    ctx.fillRect(560, 0, 40, 1200);

    ctx.fillStyle = 'white';
    ctx.fillRect(60, 0, 20, 1200);
    ctx.fillRect(520, 0, 20, 1200);

    ctx.lineWidth = 10;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([50, 60]);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 1200);
    ctx.stroke();
}
