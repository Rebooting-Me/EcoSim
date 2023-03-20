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

let isFirstRun = true;
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
    // Use the organisms data to continue the simulation
    console.log(`first creature to be created in the first generation is -> `, org[0]);
  });
}
readFile('./dynamic-fs/organisms.json')

export { Creature, Behavior, generateString, directions, types }