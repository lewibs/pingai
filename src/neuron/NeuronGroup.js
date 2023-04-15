const { EventDispatcher } = require("../events/EventDispatcher");

class NeuronGroup extends EventDispatcher {
    neurons = [];
    sensitivity = 0;

    constructor({sensitivity}){
        super()
        this.setSensitivity(sensitivity);
    }

    addNeuron(neuron) {
        neuron.sensitivity = this.sensitivity;
        this.neurons.push(neuron);
    }

    setSensitivity(number) {
        this.sensitivity = number;
        //id rather dispatch this...
        this.neurons.forEach((n)=>n.sensitivity = number);
    }
}

module.exports = {NeuronGroup}