import {loadCar} from "./js/loaders.js";
import {getImagenCacheFondo} from "./js/geImagenCacheFondo.js";
import {FactoryCar} from "./js/FactoryCar.js";
import {FactoryFondo} from "./js/FactoryFondo.js";

window.onload = function () {

    /*1 aspcoar listener*/
    document.getElementById("start-button").onclick = function () {
        startGame();
    };


    /*2 variables principales*/
    let canvas = document.getElementById('canvas');


    const factoryFondo = new FactoryFondo();
    const factoryCar = new FactoryCar(canvas);


    /* 3 solicitar recursos y cargar el juego*/
    Promise.all([
        loadCar()
    ]).then(([imageCar]) => {

        const ctx = canvas.getContext('2d');
        runGame(ctx, imageCar);
    });


    function runGame(ctx, imageCar) {
        console.log('rungame');

        const imgcacheFondo = getImagenCacheFondo(canvas);

        let fondo = factoryFondo.exe(ctx,imgcacheFondo);
        let car = factoryCar.exe(ctx, imageCar);


        document.onkeydown = function (event) {


            let key = event.key;

            console.log( event);

            if (key === "ArrowLeft") {
                fondo.draw();
                car.moveL();

            } else if (key === "ArrowRight") {
                fondo.draw();
                car.moveR();
            //
            // } else if (key === "ArrowUp") {
            //     fondo.draw();
            //     car.moveU();
            // } else if (key === "ArrowDown") {
            //     fondo.draw();
            //     car.moveD();
            }

        };

        fondo.draw();
        car.draw();
    }


    function startGame() {
        console.log('stargame');
    }

};
