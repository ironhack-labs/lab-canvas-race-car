import {loadCar} from "./js/loaders.js";
import {getImagenCacheFondo} from "./js/geImagenCacheFondo.js";
import {FactoryCar} from "./js/FactoryCar.js";
import {FactoryFondo} from "./js/FactoryFondo.js";
import {FactoryObstaculo} from "./js/FactoryObstaculo.js";
import {ConfigGame} from "./js/ConfigGame.js";


window.onload = function () {

    /*1 aspcoar listener*/
    document.getElementById("start-button").onclick = function () {
        startGame();
    };


    /*2 variables principales*/
    let canvas = document.getElementById('canvas');


    const factoryFondo = new FactoryFondo();
    const factoryCar = new FactoryCar(canvas);
    const factoryObs = new FactoryObstaculo(canvas);


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

        let fondo = factoryFondo.exe(ctx, imgcacheFondo);
        let car = factoryCar.exe(ctx, imageCar);

        let carW = factoryCar.getCarW();
        let listaObstaculos = [];

        /* crear los obstaculos ****************************** */
        let yObstaculo = 400;
        listaObstaculos.push(factoryObs.exe(ctx, carW, yObstaculo));


        let distancia = 2 * ConfigGame.carH;

        for (let i = 1; i < ConfigGame.numObstaculos; i++) {


            listaObstaculos.push(factoryObs.exe(ctx, carW, yObstaculo - distancia * i));


        }


        listaObstaculos.draw = function () {
            listaObstaculos.forEach(o => {
                o.draw();
            });
        };

        listaObstaculos.onAvanzaTiempo = function () {
            listaObstaculos.forEach(o => {
                o.onAvanzaTiempo();
            });
        };

        let contadorFrame = 0;

        function renderFrame() {

            /* evaluar el estado del juego - terminado ***** */
            let numObstaculosCompletados = listaObstaculos.filter(o => {
                return o.estado === 'completado';
            }).length;

            if (numObstaculosCompletados === ConfigGame.numObstaculos) {
                alert('juego terminado');
                return;
            }

            /* efecto del tiempo *************************** */
            listaObstaculos.onAvanzaTiempo();
            fondo.onAvanzaTiempo();

            /* dibujar capas  ***************************** */
            fondo.draw();
            listaObstaculos.draw();
            car.draw();


            contadorFrame++;


            if (contadorFrame % 10 === 0) {
                console.log(`frame ${contadorFrame} numObstaculosTerminados ${numObstaculosCompletados}`);
            }

            requestAnimationFrame(renderFrame);
        }


        document.onkeydown = function (event) {


            let key = event.key;


            if (key === "ArrowLeft") {
                car.moveL();


            } else if (key === "ArrowRight") {
                car.moveR();
            }

        };

        renderFrame();
    }


    function startGame() {
        console.log('stargame');
    }

};
