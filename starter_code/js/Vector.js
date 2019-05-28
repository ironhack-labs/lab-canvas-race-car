export class Vector {
    constructor(x,y){
        this.set(x,y);
    }

    set(x, y){
        this.x=x;
        this.y=y;
    }

    setVector(v){
        this.x=v.x;
        this.y=v.y;
    }
}