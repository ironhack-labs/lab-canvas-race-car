window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        startGame();
    };


    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let canvasW = canvas.width;
    let canvasH = canvas.height;
    let deltaPista = 25;
    let rayaW = 10;
    let rayaCentroH = 10;

    ctx.fillStyle = '#808080';
    ctx.fillRect(deltaPista, 0, canvasW - deltaPista * 2, canvasH);

    //las rayas
    ctx.fillStyle = '#FFFFFF';
    //izq
    ctx.fillRect(deltaPista + rayaW, 0, rayaW, canvasH);
    //dere
    ctx.fillRect(canvasW - deltaPista - rayaW * 2, 0, rayaW, canvasH);
    //centro
    let numCentro = Math.floor(canvasH / rayaCentroH)+1;
    let xRayaCentro = (canvasW + rayaW/2) / 2;

    for (let i = 1; i < numCentro; i++) {
        ctx.fillRect(xRayaCentro, (i-0.5) * rayaCentroH  , rayaW / 2, rayaCentroH / 2);
    }


    function startGame() {

    }
};
