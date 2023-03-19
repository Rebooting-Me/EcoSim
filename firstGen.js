"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirstGen = void 0;
const index_js_1 = require("./index.js");
function createFirstGen(size) {
    let organism = [];
    for (let i = 0; i < size; i++) {
        let genType = (Math.floor((Math.random() + 1) * 10000)) % 5; // is used to generate random 'types[] indices'
        let genDir = (Math.floor((Math.random() + 1) * 10000)) % 4; // is used to generate random 'directions[] indices'
        let genHunger = (Math.floor((Math.random() + 1) * 10000)) % 11; // is used to generate random 'hunger level which is always <=10'
        if (genHunger === 0) {
            genHunger = 1;
        }
        const [key1, key2, key3, key4] = [(0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6)];
        organism[i] = {
            type: index_js_1.types[genType],
            speed: Math.floor(Math.random() * 30),
            behavior: {
                hunger: genHunger,
                direction: index_js_1.directions[genDir]
            },
            genome: { keys: [key1, key2, key3, key4] }
        };
    }
    return organism;
}
exports.createFirstGen = createFirstGen;
