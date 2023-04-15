const {Neuron} = require("./neuron/Neuron");
const { NeuronGroup } = require("./neuron/NeuronGroup");

test('tests random things', () => {
    const n1 = new Neuron({
        x:0,
        y:0,
        z:0
    });
    n1.name = "n1";
    const n2 = new Neuron({
        x:1,
        y:1,
        z:1
    });
    n2.name = "n2"

    const nurons = new NeuronGroup({sensitivity:10});
    nurons.addNeuron(n1);
    nurons.addNeuron(n2);
    console.log(n1);
});