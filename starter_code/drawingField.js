function draw() {
    var lineHeight = 200

    for (var i = 0; i < w; i += 20) {
        // ctx.lineWidth = 1
        ctx.strokeStyle = `rgba(255, 0, 0, 1)`
        ctx.moveTo(i, h2 - lineHeight / 2)
        ctx.lineTo(i, h2 + lineHeight / 2)
        ctx.stroke()
    }
}