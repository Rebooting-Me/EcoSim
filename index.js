"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.directions = exports.generateString = void 0;
const randomString_js_1 = __importDefault(require("./scripts/randomString.js"));
exports.generateString = randomString_js_1.default;
const firstGen_js_1 = require("./scripts/firstGen.js");
const directions = ['MoveEast', 'MoveNorth', 'MoveWest', 'MoveSouth'];
exports.directions = directions;
const types = ['Bacteria', 'Insects', 'Fish', 'Birds', 'Mammals'];
exports.types = types;
console.log((0, firstGen_js_1.createFirstGen)(10));
