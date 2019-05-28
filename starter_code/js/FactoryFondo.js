import {GameEntity} from "./GameEntity.js";
import {ConfigGame} from "./ConfigGame.js";


export class FactoryFondo {

    constructor() {
    };

    exe(context, image) {
        let f = new GameEntity(image);
        f.posicion.set(0, 0);
        f.velocidad.set(0, ConfigGame.velocidadScreen);



        let rayaW = ConfigGame.rayaW;

        let cacheRayas = document.createElement('canvas');
        cacheRayas.width = image.width;
        cacheRayas.height = image.height;

        let rayaCentroH = 35;

        let ctxCache = cacheRayas.getContext('2d');

        //centro
        let separacion = 18;
        let numCentro = Math.floor(image.height / (rayaCentroH + separacion)) + 1;
        let xRayaCentro = (image.width + rayaW) / 2 - rayaW / 2;


        ctxCache.fillStyle = '#FFFFFF';

        for (let i = 0; i < numCentro; i++) {

            ctxCache.fillRect(
                xRayaCentro,
                i * (rayaCentroH + separacion),
                rayaW / 2, rayaCentroH
            );

        }

        f.draw = function () {

            //elm fondo de la pista
            context.drawImage(
                this.getImage(),
                0,
                0,
                this.cacheImage.width, this.cacheImage.height
            );


            //las rayas se van moviendo y se dibujan dos veces
            context.drawImage(
                cacheRayas,
                0,
                this.posicion.y,
                this.cacheImage.width, this.cacheImage.height
            );

            //las rayas se van moviendo y se dibujan dos veces
            context.drawImage(
                cacheRayas,
                0,
                this.posicion.y - this.cacheImage.height,
                this.cacheImage.width, this.cacheImage.height
            );

        };



        f.onAvanzaTiempo = function () {
            this.posicion.y += this.velocidad.y;

            if (this.posicion.y >= this.cacheImage.height) {
                this.posicion.y = 0;
            }

        };

        return f;
    }
}