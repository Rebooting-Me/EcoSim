"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirstGen = void 0;
const index_js_1 = require("./index.js");
function createFirstGen(size) {
    let organism = [];
    for (let i = 0; i < size; i++) {
        let genType = (Math.floor((Math.random() + 1) * 10000)) % 5; // is used to generate random 'types[]'
        let genDir = (Math.floor((Math.random() + 1) * 10000)) % 4; // is used to generate random 'directions[]'
        let genHunger = (Math.floor((Math.random() + 1) * 10000)) % 10; // is used to generate random 'hunger level'
        const [key1, key2, key3, key4] = [(0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6)];
        organism[i] = {
            type: index_js_1.types[genType],
            speed: Math.floor(Math.random() * 1000),
            behavior: {
                hunger: genHunger,
                direction: index_js_1.directions[genDir]
            },
            genome: { keys: [key1, key2, key3, key4] }
        };
    }
    return organism[0].genome.keys;
}
exports.createFirstGen = createFirstGen;
