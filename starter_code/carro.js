class Carro {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    virarDireita(){
        this.x += 20;
    }
    virarEsquerda(){
        this.x -= 20;
    }
    irParaCima(){
        this.y -= 20;
    }
    irParaBaixo(){
        this.y += 20;
    }
   

}