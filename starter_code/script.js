window.onload = function() {
 document.getElementById("start-button").onclick = function() {
   startGame();
 };
 };

 function startGame() {
   function draw() {
     var canvas = document.getElementById('myCanvas');
       var ctx = canvas.getContext('2d');

       ctx.fillStyle = "#3b821e ";
       ctx.fillRect(0,0,380,600);  // primer valor X segundo valor Y
       ctx.fillStyle = "#808080 ";
       ctx.fillRect(20,0, 340,600);
       ctx.fillStyle = "#fff";
       ctx.fillRect(30,0,10,720);
       ctx.fillStyle = "#fff";
       ctx.fillRect(340,0,10,720);

       ctx.beginPath();
       ctx.setLineDash([25, 35]);
       ctx.strokeStyle = "#fff";
       ctx.moveTo(190, 0);
       ctx.lineTo(190, 720);
       ctx.lineWidth = 5;
       ctx.stroke();

       var img = new Image();
        imgScale = 150/150;
        img.onload = function() {
          ctx.drawImage(img, 175, 450,35*imgScale,50);
        };
        img.src = 'images/car.png';

       }
 draw();
}
