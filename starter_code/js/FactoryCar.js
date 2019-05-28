import {GameEntity} from "./GameEntity.js";

export class FactoryCar {
    constructor( image){

        let c= new GameEntity(image);
        c.posicion.set(100,100);
    }
}