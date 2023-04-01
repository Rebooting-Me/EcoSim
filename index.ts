import generateString from './scripts/randomString.js';
import { createFirstGen } from './scripts/firstGen/firstGen.js';
import * as fs from 'fs';

const directions = ['MoveEast', 'MoveNorth', 'MoveWest', 'MoveSouth'];
const types = ['Bacteria', 'Insects', 'Fish', 'Birds', 'Mammals']

class Creature {
    id: number;
    type: string;
    speed: number;
    behavior: Behavior;
    genome: { keys: string[] };

    constructor(id: number, type: string, speed: number, hunger: number, direction: string, keys: string[]) {
    this.id = id;
    this.type = type;
    this.speed = speed;
    this.behavior = { hunger, direction };
    this.genome = { keys };
  }
}

interface Behavior {
    hunger: number;
    direction: string
}

let isFirstRun = false;
let organisms: Creature[];

if (isFirstRun) {
  organisms = createFirstGen(1000);
  isFirstRun = false;
}

const i = (Math.floor(Math.random() * 10))

async function readFile(filePath: string) {
  await fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    const org = JSON.parse(data);
    let word;
    if (i === 1) {word = 'st'}
    if (i === 2) {word = 'nd'}
    if (i === 3) {word = 'rd'}
    if (i > 3) {word = 'th'}
    // Use the organisms data to continue the simulation
    console.log(`${i}${word} creature to be created in the first generation is -> `, org[i]);
  });
}
readFile('./dynamic-fs/organisms.json')

export { Creature, Behavior, generateString, directions, types }