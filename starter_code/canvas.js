window.onload = function() {
    function draw(){
        var ctx = document.getElementById('canvas').getContext('2d');
            //Líneas verdes
            ctx.fillStyle='#04B404';
            ctx.fillRect(0, 0, 35, 500);
            ctx.fillStyle='#04B404';
            ctx.fillRect(265, 0, 35, 500);
            //Líneas grises
            ctx.fillStyle='#848484';
            ctx.fillRect(35, 0, 10, 500)
            ctx.fillStyle='#848484';
            ctx.fillRect(260, 0, 10, 500)
            //Centro
            ctx.fillStyle='#848484';
            ctx.fillRect(55, 0, 190, 500);
            //Linea central
            ctx.strokeStyle='#FFFFFF'
            ctx.setLineDash([30, 10]);
            ctx.beginPath();
            ctx.lineWidth=5;
            ctx.moveTo(150, 0);
            ctx.lineTo(150, 500);
            ctx.stroke();
            //Imagen coche
            var img = new Image();
            imgScale = 640/480;
            img.onload = function() {
                ctx.drawImage(img, 125, 415,35*imgScale,80);
            };
            img.src = './images/car.png';
    };
    draw();
}