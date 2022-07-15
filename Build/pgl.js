var $htxhw$deckglcore = require("@deck.gl/core");
var $htxhw$deckgllayers = require("@deck.gl/layers");



const $2d99819a616f6df5$var$INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15
};
const $2d99819a616f6df5$var$deckgl = new (0, $htxhw$deckglcore.Deck)({
    initialViewState: $2d99819a616f6df5$var$INITIAL_VIEW_STATE,
    controller: true,
    layers: [
        new (0, $htxhw$deckgllayers.ScatterplotLayer)({
            data: [
                {
                    position: [
                        -122.45,
                        37.8
                    ],
                    color: [
                        255,
                        0,
                        0
                    ],
                    radius: 100
                }
            ],
            getColor: (d)=>d.color,
            getRadius: (d)=>d.radius
        })
    ]
});


//# sourceMappingURL=pgl.js.map
