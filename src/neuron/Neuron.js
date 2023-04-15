const { EventDispatcher } = require("../events/EventDispatcher");
const { FIRE } = require("../events/events");

class Neuron extends EventDispatcher {
    isNeuron = true;

    sensitivity = 0;

    x = 0;
    y = 0;
    z = 0;

    constructor({
        x,
        y,
        z,
        sensitivity,
    }) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;

        this.sensitivity = sensitivity;

        this.addEventListener(FIRE, (e)=>{this.handlePing(e)})
    }

    fire() {
        this.dispatchEvent({ type: FIRE })
    }

    handlePing(event) {
        // dont do anything if its just targeting itself
        if (event.target === this) {
            return;
        }

        if (event.type === FIRE) {
            if (this.distanceTo(event.target) <= this.sensitivity) {
                console.log("close enough to do something?")
            }
        }
    }

    distanceTo(neuron) {
        return (
            Math.sqrt(
                Math.pow(neuron.x - this.x, 2)
                + Math.pow(neuron.y - this.y, 2)
                + Math.pow(neuron.z - this.z, 2)
            )
        )
    }
}

module.exports = {Neuron}