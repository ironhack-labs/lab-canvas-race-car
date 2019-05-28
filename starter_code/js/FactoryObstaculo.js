import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";
import {ConfigGame} from "./ConfigGame.js";


export class FactoryObstaculo {

    constructor(canvas) {

        this.canvasH = canvas.height;
        this.canvasW = canvas.width;


    }

    exe(context, carW, y) {


        let obstaculo = new GameEntity(null);

        //  obstaculo.w=Math.random(this.canvasW-)

        //son 5pox para los espejos de lcarro
        let limitePista1 = ConfigGame.limiteXIni();
        let limitePista2 = ConfigGame.limiteXFin(this.canvasW);

        let espacioLibre=carW*1.2;

        let maxW = limitePista2 - limitePista1 - espacioLibre;



        let margenX1 = Math.random() * maxW;
        let margenX2 = Math.random() * maxW;

        if (margenX1 < espacioLibre) {
            margenX1 = ConfigGame.deltaPista/2;
        }

        if (margenX2 < espacioLibre && margenX1===ConfigGame.deltaPista/2) {
            margenX2 = espacioLibre;
        }

        obstaculo.width = limitePista2 - margenX2 -margenX1;
        obstaculo.height=ConfigGame.obstaculoH;

        obstaculo.posicion.set(limitePista1+margenX1, y);


        obstaculo.draw = function () {


            console.log(`${this.width}, ${this.height}`);


           // context.fillStyle('red');
            context.fillRect(this.posicion.x, this.posicion.y, this.width , this.height);


        };


        return obstaculo;
    }
}