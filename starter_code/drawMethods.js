
function moveLine() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //Middle dashed white
    ctx.beginPath();
    ctx.setLineDash([15, 15]);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white"
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 600);
    ctx.stroke();
    ctx.closePath();
}

function draw1() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //Grey road
    ctx.beginPath();
    ctx.fillStyle = "#949494";
    ctx.fillRect(0, 0, 400, 600);
    ctx.stroke();
    ctx.closePath();

    //Left green
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 30, 600);
    ctx.stroke();

    //Right green
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(370, 0, 30, 600);
    ctx.stroke();
    ctx.closePath();



    //Left white
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 10, 600);
    ctx.stroke();
    ctx.closePath();


    //Right white
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(350, 0, 10, 600);
    ctx.stroke();
    ctx.closePath();


}


function car() {

    var canvas = document.getElementById('myCanvas'),
        context = canvas.getContext('2d');
    base_image = new Image();
    base_image.src = '/images/car.png';
    base_image.onload = function () {
        context.drawImage(base_image, posX, 460, 50, 95);
    }
    
}

var posX = 175;
window.onkeydown = function (e) {
    if (e.keyCode === 37) {
      posX -= 10;
      car(); 
    }
    if (e.keyCode === 39) {
        posX += 10;
        car();
    }
  }










