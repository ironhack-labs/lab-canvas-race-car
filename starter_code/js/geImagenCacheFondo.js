import {ConfigGame} from './ConfigGame.js';

export function getImagenCacheFondo(canvas) {

    const cache = document.createElement('canvas');
    cache.width = canvas.width;
    cache.height = canvas.height;

    let ctx = cache.getContext('2d');

    let canvasW = canvas.width;
    let canvasH = canvas.height;
    let deltaPista = ConfigGame.deltaPista;
    let rayaW = ConfigGame.rayaW;
    let rayaCentroH = 10;

    ctx.fillStyle = '#808080';
    ctx.fillRect(deltaPista, 0, canvasW - deltaPista * 2, canvasH);

    //las rayas
    ctx.fillStyle = '#FFFFFF';
    //izq
    ctx.fillRect(ConfigGame.limiteXIni(canvasW), 0, rayaW, canvasH);
    //dere
    ctx.fillRect(ConfigGame.limiteXFin(canvasW), 0, rayaW, canvasH);


    return cache;

}