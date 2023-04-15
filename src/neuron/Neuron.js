const { EventDispatcher } = require("../events/EventDispatcher");
const { FIRE } = require("../events/events");
const { Vector3D } = require("./Vector3D");

class Neuron extends EventDispatcher {
    isNeuron = true;

    sensitivity = 0;
    location = new Vector3D(0,0,0);

    constructor({
        location,
        sensitivity,
    }) {
        super();
        
        this.location = new Vector3D(location.x, location.y, location.z) || this.location;
        this.sensitivity = sensitivity || this.sensitivity;

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
        return this.location.distanceTo(neuron)
    }
}

module.exports = {Neuron}