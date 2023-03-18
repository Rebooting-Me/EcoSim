import { Creature, Behavior, generateString, directions, types } from './index.js';

function createFirstGen (size: number) {
    let organism: Creature[] = [];
    for (let i = 0; i < size; i++) {

        let genType = (Math.floor((Math.random() + 1) * 10000)) % 5; // is used to generate random 'types[]'
        let genDir = (Math.floor((Math.random() + 1) * 10000)) % 4; // is used to generate random 'directions[]'
        let genHunger = (Math.floor((Math.random() + 1) * 10000)) % 10; // is used to generate random 'hunger level'
        
        const [key1, key2, key3, key4] = [generateString(6), generateString(6), generateString(6), generateString(6)]
        
        organism[i] = {
            type : types[genType],
            speed : Math.floor(Math.random() * 1000),
            behavior: {
                hunger: genHunger,
                direction: directions[genDir]
            },
            genome : {key: [key1, key2, key3, key4]}
        }
    }
    return organism[0].genome.key;
}

export { createFirstGen }