const { PingDispatcher } = require("../events/PingDispatcher");
const { NEURON_FIRE } = require("../events/pings");
const { Vector3D } = require("../threeD/Vector3D");

class Neuron extends PingDispatcher {
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

        this.addEventListener(NEURON_FIRE, (e)=>{this.handlePing(e)})
    }

    fire() {
        this.dispatchEvent({ type: NEURON_FIRE })
    }

    handlePing(event) {
        // dont do anything if its just targeting itself
        if (event.target === this) {
            return;
        }

        if (event.type === NEURON_FIRE) {
            if (this.distanceTo(event.target) <= this.sensitivity) {
                console.log("close enough to do something?")
            }
        }
    }
}

module.exports = {Neuron}