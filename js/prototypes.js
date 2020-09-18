Array.prototype.square = function () {
    return this.map(x => x ** 2)
}

Array.prototype.maxVal = function() {
    let max = 0;
    for (let it = 0; it <= (this.length - 1); it++) {
        if (typeof this[it] === "number") {
            if (this[it] > max) {
                max = this[it]
            }
        } else throw TypeError("max value should be called on arrays containing only numbers")
    }
    return max
}

Array.prototype.minVal = function() {
    let min = 9007199254740991;
    for (let it = 0; it <= (this.length - 1); it++) {
        if (typeof this[it] === "number") {
            if (this[it] < min) {
                min = this[it]
            }
        } else throw TypeError("min value should be called on arrays containing numbers only")
    }
    return min
}

Array.prototype.maxIndex = function() {
    let max = 0;
    let index = -1 ;
    for (let it = 0; it <= (this.length - 1); it++) {
        if (typeof this[it] === "number") {
            if (this[it] > max) {
                max = this[it]
                index = it
            }
        } else throw TypeError("maxIndex() should be called on arrays containing numbers")
    }
    return index
}

Number.prototype.toDegree = function () {
    return Math.atan(this.valueOf()) * 180 / Math.PI
}

Number.prototype.significant = function(s) {
    if (this.valueOf() % 1 !== 0) {
        return this.valueOf().toFixed(s)
    } else return this
}

