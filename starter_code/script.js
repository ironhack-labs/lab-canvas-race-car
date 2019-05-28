import {loaderImage} from "./js/loadImage.js";
import {getImagenCacheFondo} from "./js/geImagenCacheFondo.js";

window.onload = function () {

    document.getElementById("start-button").onclick = function () {
        startGame();
    };

    Promise.all([
        loadCar()
    ]).then(([imageCar]) => {

        let canvas = document.getElementById('canvas');

        const ctx = canvas.getContext('2d');

        const imgcacheFondo = getImagenCacheFondo(canvas);

        ctx.drawImage(imgcacheFondo,0,0);

        runGame(canvas, imageCar);

    });


    function loadCar() {
        return loaderImage('images/car.png').then(
            image => {
                return image;
            }
        )
    }


    function runGame(canvas, imageCar) {
        console.log('rungame');

    }


    function startGame() {
        console.log('stargame');
    }
};
