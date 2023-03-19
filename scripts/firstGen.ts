import { Creature, generateString, directions, types } from '../index.js';
import fs from 'fs';

function createFirstGen(size: number): Creature[] {
  let organism: Creature[] = [];
  if (fs.existsSync('./dynamic-fs/organisms.json')) { // check if file exists
    const rawData = fs.readFileSync('./dynamic-fs/organisms.json');
    organism = JSON.parse(rawData.toString());
  } else {
    for (let i = 0; i < size; i++) {
      let id = i;
      let genType = (Math.floor((Math.random() + 1) * 10000)) % 5;
      let genDir = (Math.floor((Math.random() + 1) * 10000)) % 4;
      let genHunger = (Math.floor((Math.random() + 1) * 10000)) % 11;
      if (genHunger === 0) { genHunger = 1; }
      const keys = [generateString(6), generateString(6), generateString(6), generateString(6)]
      let creature = new Creature(id, types[genType], Math.floor(Math.random() * 30), genHunger, directions[genDir], keys)
      organism.push(creature);
    }
    fs.writeFileSync('./dynamic-fs/organisms.json', JSON.stringify(organism)); // save the organisms array to a file
  }
  return organism;
}

export { createFirstGen }