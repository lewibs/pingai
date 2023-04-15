const { distributeCords } = require("./distributeCords");

test("This is used to check that the cords are distributed", ()=>{
    const cords = [];
    const range = 10;
    const CORD_AMOUNT = 100;
    const INIT_CORD = {x:5,y:1,z:20};

    for (let i = 0; i < CORD_AMOUNT; i++) {
        cords.push(distributeCords({...INIT_CORD}, range));
    }

    const ranges = {
        x:[INIT_CORD.x,INIT_CORD.x],
        y:[INIT_CORD.y,INIT_CORD.y],
        z:[INIT_CORD.z,INIT_CORD.z]
    };
    let altered = 0;

    cords.forEach((cord)=>{

        if (cord.x !== INIT_CORD.x && cord.y !== INIT_CORD.y && cord.z !== INIT_CORD.z) {
            altered++;
        }

        const updateRange = (field)=>{
            if (cord[field] > ranges[field][1]) {
                ranges[field][1] = cord[field];
            }
    
            if (cord[field] < ranges[field][0]) {
                ranges[field][0] = cord[field];
            }
        }

        updateRange("x");
        updateRange("y");
        updateRange("z");
    })

    expect(altered > 0).toBe(true) 
    expect(Math.max(...ranges.x) <= INIT_CORD.x + range).toBe(true)
    expect(Math.max(...ranges.y) <= INIT_CORD.y + range).toBe(true)
    expect(Math.max(...ranges.z) <= INIT_CORD.z + range).toBe(true)
    expect(Math.min(...ranges.x) >= INIT_CORD.x - range).toBe(true)
    expect(Math.min(...ranges.y) >= INIT_CORD.y - range).toBe(true)
    expect(Math.min(...ranges.z) >= INIT_CORD.z - range).toBe(true)
});