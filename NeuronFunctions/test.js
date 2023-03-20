const organisms = require("../dynamic-fs/organisms.json");
const brain = require('brain.js');


const net = new brain.NeuralNetwork();
let stream = [];

for (let j = 0; j < organisms.length; j++) {
    if (organisms[j].behavior.hunger > 5) {
          stream.push({
            input: [organisms[j].behavior.hunger],
            output: [false],
          })
    } else {
          stream.push({
            input: [organisms[j].behavior.hunger],
            output: [true],
          })
    }
}

net.train(stream);
let run = net.run([-8]);
console.log(run);
if (run < 0.5) {
    console.log(`The organism is gonna survive!`)
} else {
    console.log(`The organism is gonna die unfortunately!`);
}