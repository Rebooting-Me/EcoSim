"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirstGen = void 0;
const index_js_1 = require("../index.js");
const fs_1 = __importDefault(require("fs"));
function createFirstGen(size) {
    let organism = [];
    if (fs_1.default.existsSync('./dynamic-fs/organisms.json')) { // check if file exists
        const rawData = fs_1.default.readFileSync('./dynamic-fs/organisms.json');
        organism = JSON.parse(rawData.toString());
    }
    else {
        for (let i = 0; i < size; i++) {
            let id = i;
            let genType = (Math.floor((Math.random() + 1) * 10000)) % 5;
            let genDir = (Math.floor((Math.random() + 1) * 10000)) % 4;
            let genHunger = (Math.floor((Math.random() + 1) * 10000)) % 11;
            if (genHunger === 0) {
                genHunger = 1;
            }
            const keys = [(0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6), (0, index_js_1.generateString)(6)];
            let creature = new index_js_1.Creature(id, index_js_1.types[genType], Math.floor(Math.random() * 30), genHunger, index_js_1.directions[genDir], keys);
            organism.push(creature);
        }
        fs_1.default.writeFileSync('./dynamic-fs/organisms.json', JSON.stringify(organism)); // save the organisms array to a file
    }
    return organism;
}
exports.createFirstGen = createFirstGen;
