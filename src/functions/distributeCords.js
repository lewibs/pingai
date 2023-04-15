function distributeCords({x,y,z}, range) {
    return {
        x:distributeCord(x,range),
        y:distributeCord(y,range),
        z:distributeCord(z,range),
    }
}

function distributeCord(start, range) {
    let negative = Math.random() < 0.5;
    let rand = Math.floor(Math.random() * range);
    return negative ? start - rand : start + rand;
}

module.exports = {distributeCords}