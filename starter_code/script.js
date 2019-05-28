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
    const ctx = canvas.getContext('2d');

    const factoryFondo=new FactoryFondo();
    const factoryCar=new FactoryCar(canvas);


    /* 3 solicitar recursos y cargar el juego*/
    Promise.all([
        loadCar()
    ]).then(([imageCar]) => {
        runGame(canvas, imageCar);
    });



    function runGame(canvas, imageCar) {
        console.log('rungame');

        const imgcacheFondo = getImagenCacheFondo(canvas);

        let fondo= factoryFondo.exe(imgcacheFondo);
        let car= factoryCar.exe(imageCar);

        fondo.draw(ctx);
        car.draw(ctx);
    }


    function startGame() {
        console.log('stargame');
    }

};
