var $cKcV5$deckglcore = require("@deck.gl/core");
var $cKcV5$deckgllayers = require("@deck.gl/layers");



const $dcf42b15dd861d17$var$INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15
};
const $dcf42b15dd861d17$var$deckgl = new (0, $cKcV5$deckglcore.Deck)({
    initialViewState: $dcf42b15dd861d17$var$INITIAL_VIEW_STATE,
    controller: true,
    layers: [
        new (0, $cKcV5$deckgllayers.ScatterplotLayer)({
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
