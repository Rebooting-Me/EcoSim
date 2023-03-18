import generateString from './randomString.js';
import { createFirstGen } from './firstGen.js';

const directions = ['MoveEast', 'MoveNorth', 'MoveWest', 'MoveSouth'];
const types = ['Bacteria', 'Insects', 'Fish', 'Birds', 'Mammals']

interface Creature {
    type: string;
    speed: number;
    behavior: Behavior;
    genome: { keys: string[] }
}

interface Behavior {
    hunger: number;
    direction: string
}

console.log(createFirstGen(10))

export { Creature, Behavior, generateString, directions, types }