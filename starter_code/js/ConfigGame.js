export let ConfigGame =
    {
        deltaPista: 25,
        rayaW: 10,
        limiteXIni: function () {
            return ConfigGame.deltaPista + ConfigGame.rayaW
        },
        limiteXFin: function (canvasW) {
            return canvasW -ConfigGame.deltaPista - ConfigGame.rayaW*2;
        },
        carH:100,
        obstaculoH:30,
        velocidadScreen:40
    };