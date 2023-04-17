const { Vector3D } = require("./Vector3D");


test("this is testing the distanceTo method", ()=>{
    const a = new Vector3D(1,1,1);

    const b = new Vector3D(1,1,1);

    const c = new Vector3D(0,0,0);

    const d = new Vector3D(-1,5,0)

    const e = new Vector3D(1,1,0);

    expect(a.distanceTo(a)).toBe(0);
    expect(a.distanceTo(b)).toBe(0);
    expect(a.distanceTo(c)).toBe(Math.sqrt(3));
    expect(a.distanceTo(d)).toBe(Math.sqrt(21));
    expect(a.distanceTo(e)).toBe(1);
});