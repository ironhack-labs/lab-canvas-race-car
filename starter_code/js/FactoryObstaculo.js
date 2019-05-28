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

        obstaculo.velocidad.set(0,ConfigGame.velocidadScreen);

        //son 5pox para los espejos de lcarro
        let limitePista1 = ConfigGame.limiteXIni()+10;
        let limitePista2 = ConfigGame.limiteXFin(this.canvasW);

        let espacioLibre = carW * 1.2;


        let maxW = limitePista2 - limitePista1 - espacioLibre;
        let minW = espacioLibre;

        let libre1 = Math.random() * maxW;
        let libre2 = Math.random() * maxW;

        if ( (libre1 + libre2) > maxW) {
            libre1 = maxW * libre1 / (libre1 + libre2);
            libre2 = maxW * libre2 / (libre1 + libre2);
        }

        if(( maxW-libre1-libre2) < minW) {
            libre1 = libre1 * minW / (libre1+libre2);
            libre2 = libre2 * minW / (libre1+libre2);
        }

        if (libre1 < espacioLibre && libre2 < espacioLibre) {

            if (Math.random() > 0.5) {
                libre2 = espacioLibre;
            } else {
                libre1 = espacioLibre;
            }
        }

        if (libre1 < espacioLibre) {
            libre1 = 0;
        }

        if (libre2 < espacioLibre) {
            obstaculo.width = maxW - libre1 +espacioLibre;
        }else{
            obstaculo.width = maxW - libre1 - libre2;
        }


        obstaculo.height = ConfigGame.obstaculoH;

        obstaculo.posicion.set(limitePista1 + libre1, y);


        obstaculo.draw = function () {

            // context.fillStyle('red');
            context.fillRect(this.posicion.x, this.posicion.y, this.width, this.height);

        };


        obstaculo.onAvanzaTiempo=function(){

            this.posicion.y+=this.velocidad.y;
        };

        return obstaculo;
    }
}