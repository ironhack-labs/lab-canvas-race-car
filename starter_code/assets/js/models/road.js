function Road (ctx, x, y) {
    this.ctx = ctx; //contexto
    this.x = x || 0;
    this.y = y || 0;
    this.width = 50;
    this.height = 100;

}



// Guardamos el contexto para luego dejarlo como estaba
ctx.save()

ctx.fillStyle = 'green';
ctx.fillRect();

// Restauramos el contexto al valor de antes
ctx.restore()


Road.prototype.draw = function() {
    ctx.fillStyle = 'green';

    this.ctx.fillRect(
        this.x,
        this.y,
        this.width,
        this.height

    )
}