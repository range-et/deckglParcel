import {Deck as $7IK1Q$Deck} from "@deck.gl/core";
import {ScatterplotLayer as $7IK1Q$ScatterplotLayer} from "@deck.gl/layers";



const $73c1749e9a203781$var$INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15
};
const $73c1749e9a203781$var$deckgl = new (0, $7IK1Q$Deck)({
    initialViewState: $73c1749e9a203781$var$INITIAL_VIEW_STATE,
    controller: true,
    layers: [
        new (0, $7IK1Q$ScatterplotLayer)({
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


//# sourceMappingURL=pgl_module.js.map
