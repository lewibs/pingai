class Vector3D {
    x=0
    y=0
    z=0

    constructor(x,y,z) {
        this.x=x;
        this.y=y;
        this.z=z;
    }

    distanceTo(vector) {
        return (
            Math.sqrt(
                Math.pow(vector.x - this.x, 2)
                + Math.pow(vector.y - this.y, 2)
                + Math.pow(vector.z - this.z, 2)
            )
        )
    }
}


module.exports = {Vector3D}