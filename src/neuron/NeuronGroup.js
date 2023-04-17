const { PingDispatcher } = require("../events/PingDispatcher");
const { Neuron } = require("./Neuron");
const { Vector3D } = require("../threeD/Vector3D");

class NeuronGroup extends PingDispatcher {
    neurons = [];

    sensitivity = 0;
    location = new Vector3D(0,0,0)


    constructor({
        sensitivity,
        neurons,
    }){
        super()
        this.setSensitivity(sensitivity);
    }

    size() {
        return this.neurons.length
    }

    addNeuron(neuron) {
        if (!neuron) {
            neuron = new Neuron({})
        }
        

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