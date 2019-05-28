export let ConfigGame =
    {
        deltaPista: 25,
        rayaW: 10,
        limiteXIni: function () {
            return ConfigGame.deltaPista + ConfigGame.rayaW*2
        },
        limiteXFin: function (canvasW) {
            return canvasW -2*ConfigGame.deltaPista ;
        },
        carH:100,
        obstaculoH:20,
        velocidadScreen:40
    };