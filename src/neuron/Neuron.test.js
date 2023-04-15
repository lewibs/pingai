const { Neuron } = require("./Neuron");

test("this is testing the distanceTo method", ()=>{
    const a = new Neuron({
        location:{
            x:1,
            y:1,
            z:1,
        }
    })

    const b = new Neuron({
        location: {
            x:1,
            y:1,
            z:1,
        }
    })

    const c = new Neuron({
        location: {
            x:0,
            y:0,
            z:0,
        }
    });

    const d = new Neuron({
        location:{
            x:-1,
            y: 5,
            z: 0,
        }
    })

    const e = new Neuron({
        location: {
            x:1,
            y:1,
            z:0,
        }
    })

    expect(a.distanceTo(a)).toBe(0);
    expect(a.distanceTo(b)).toBe(0);
    expect(a.distanceTo(c)).toBe(Math.sqrt(3));
    expect(a.distanceTo(d)).toBe(Math.sqrt(21));
    expect(a.distanceTo(e)).toBe(1);
});