"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.directions = exports.generateString = exports.Creature = void 0;
const randomString_js_1 = __importDefault(require("./scripts/randomString.js"));
exports.generateString = randomString_js_1.default;
const firstGen_js_1 = require("./scripts/firstGen.js");
const fs = __importStar(require("fs"));
const directions = ['MoveEast', 'MoveNorth', 'MoveWest', 'MoveSouth'];
exports.directions = directions;
const types = ['Bacteria', 'Insects', 'Fish', 'Birds', 'Mammals'];
exports.types = types;
class Creature {
    id;
    type;
    speed;
    behavior;
    genome;
    constructor(id, type, speed, hunger, direction, keys) {
        this.id = id;
        this.type = type;
        this.speed = speed;
        this.behavior = { hunger, direction };
        this.genome = { keys };
    }
}
exports.Creature = Creature;
let isFirstRun = true;
let organisms;
if (isFirstRun) {
    organisms = (0, firstGen_js_1.createFirstGen)(1000);
    isFirstRun = false;
}
const i = (Math.floor(Math.random() * 10));
async function readFile(filePath) {
    await fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err)
            throw err;
        const org = JSON.parse(data);
        // Use the organisms data to continue the simulation
        console.log(`first creature to be created in the first generation is -> `, org[i]);
    });
}
readFile('./dynamic-fs/organisms.json');
