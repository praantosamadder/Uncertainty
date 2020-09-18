// function mean(list) {
//     let sum = 0;
//     for (let it = 0; it <= (list.length - 1); it++) {
//         sum += list[it]
//     }
//     return sum/(list.length)
// }
// <Summary>
// Declared some prototype functions
// </Summary>
//
// Array.prototype.square = function () {
//     return this.map(x => x ** 2)
// }

// Array.prototype.maxVal = function() {
//     let max = 0;
//     for (let it = 0; it <= (this.length - 1); it++) {
//         if (typeof this[it] === "number") {
//             if (this[it] > max) {
//                 max = this[it]
//             }
//         } else throw TypeError("max value should be called on arrays containing only numbers")
//     }
//     return max
// }

// Array.prototype.minVal = function() {
//     let min = 9007199254740991;
//     for (let it = 0; it <= (this.length - 1); it++) {
//         if (typeof this[it] === "number") {
//             if (this[it] < min) {
//                 min = this[it]
//             }
//         } else throw TypeError("min value should be called on arrays containing numbers only")
//     }
//     return min
// }

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

let eeee = [1, 2, 3, 323, 4, 5]
// let eeee = ["2", "2", "3"]
console.log("Max index: " + eeee.maxIndex())
//
// Number.prototype.toDegree = function () {
//     return Math.atan(this.valueOf()) * 180 / Math.PI
// }
//
// Number.prototype.significant = function(s) {
//     if (this.valueOf() % 1 !== 0) {
//         return this.valueOf().toFixed(s)
//     } else return this
// }

// function multiply(x, y) {
//     if (x.length === y.length) {
//         let newList = []
//         for (let it = 0; it <= (x.length - 1); it++) {
//             newList.push(x[it] * y[it])
//         }
//         return newList
//     } else {
//         throw RangeError("Both inputs must be of the same length")
//     }
// }

// function gradientBestFit(xList, yList) {
//     if (xList.length === yList.length) {
//         let st1 = mean(xList) * mean(yList) - mean(multiply(xList, yList));
//         let st2 = Math.pow(mean(xList), 2) - mean(xList.square());
//         return st1/st2
//     } else {
//         throw RangeError("Both inputs must be of same length")
//     }
// }

// function gradientWorstFit(xList, yList, xUncertainty, yUncertainty) {
//     if (xList.length === yList.length) {
//         let x2 = xList.maxVal() + xUncertainty[xList.maxIndex()];
//         let y2 = yList.maxVal() + yUncertainty[yList.maxIndex()];
//         let x1 = xList.minVal() - xUncertainty[xList.maxIndex()];
//         let y1 = yList.minVal() - yUncertainty[yList.maxIndex()];
//
//         return (y2 - y1) / (x2 - x1)
//     } else throw RangeError("Number of x-coordinates must be equal to number of y-coordinates")
//
// }
//
// function yIntercept(xList, yList, m) {
//     if (xList.length === yList.length) {
//         return (mean(yList) - m * mean(xList))
//     } else {
//         throw RangeError("Number of x-coordinates must be equal to number of y-coordinates")
//     }
// }
//
// function gradientUncertainty(gradBestFit, gradWorstFit) {
//     return Math.abs((gradBestFit - gradWorstFit))
// }

let xl = [10, 15, 20, 25, 30, 35]
let yl = [1.3, 1.6, 2.0, 2.3, 2.6, 2.9]
//
// console.log("Gradient: " + gradientBestFit(xl, yl))
// console.log("Y-intercept: " + yIntercept(xl, yl, gradientBestFit(xl, yl)))
// console.log("Angle with x-axis: " + (gradientBestFit(xl, yl)).toDegree())

// function convertTupleToList(inputList, sigFigs, outputListX, outputListY, outputListXUnc, outputListYUnc) {
//     let index = 0
// //    inputList = [[1.1±0.1, 3.0±0.3], [2.0±0.3, 4±0.4]]
//     while (index < inputList.length) {
//         let item = inputList[index]
//         // item = [1.1±0.1, 3.0±0.3]
//
//         let xc = item[0].replaceAll(" ", "")
//         // xc = 1.1±0.1
//         let yc = item[1].replaceAll(" ", "")
//         // yc = 3.0±0.3
//
//         let xcd = (xc.split("±"))[0];
//         xcd = parseFloat(xcd)
//         outputListX.push(xcd)
//
//         let xcu = (xc.split("±"))[1];
//         xcu = parseFloat(xcu)
//         outputListXUnc.push(xcu)
//
//         let ycd = (yc.split("±"))[0];
//         ycd = parseFloat(ycd)
//         outputListY.push(ycd)
//
//         let ycu = (yc.split("±"))[1];
//         ycu = parseFloat(ycu)
//         outputListYUnc.push(ycu)
//
//         index++
//     }
//
//     console.log(outputListX)
//     console.log(outputListY)
//     console.log(outputListXUnc)
//     console.log(outputListYUnc)
//
// }

// let xl = [10, 15, 20, 25, 30, 35]
// let yl = [1.3, 1.6, 2.0, 2.3, 2.6, 2.9]
//
let tt = [["10±1", "1.3±0.2"], ["15±1", "1.6±0.1"], ["20±1", "2.0±0.1"], ["25±1", "2.3±0.1"], ["30±1", "2.6±0.1"], ["35±1", "2.9±0.1"],]
//
// let outputListX = []
// let outputListXUnc = []
// let outputListY = []
// let outputListYUnc = []
//
//
// convertTupleToList(tt, 3, outputListX, outputListY, outputListXUnc, outputListYUnc)

let gb = new Gradient(tt, 3);
console.log("Gradient: " + gb.gradBest)
console.log("Y-intercept: " + gb.cBest)
// console.log("Angle with x-axis: " + (gb).toDegree())
console.log("m of Line of Worst Fit: " + gb.gradWorst)
console.log("m = " + gb.gradBest.toFixed(3) + " ± " + Math.abs(gb.gradBest - gb.gradWorst).toFixed(3))

// DOM

let colorPalette = {
    primary: "#4b5d67",
    secondary: "#322f3d",
    tertiary: "#59405c",
    quaternary: "#87556f"
}

let coordinatesTable = document.querySelector("#coordinates-table")
coordinatesTable.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {

    }
    e.stopPropagation()
})

let inputQuery = document.querySelectorAll("input")
inputQuery.forEach(item => {
    item.addEventListener("focusin", ()=> {
        item.style.borderColor = "blue"
    })

    item.addEventListener("focusout", ()=>{
        item.style.borderColor = "transparent"
    })

    item.addEventListener("input", (event) => {
        let value = item.value
        if (value.substr(value.length - 2, 2) === "+-") {
            item.value = value.substr(0, value.length - 2) + "±"
        }
    })
})

let buttonQuery = document.querySelectorAll("button")
buttonQuery.forEach(eachButton => {
    eachButton.addEventListener("mousedown", ()=> {
        eachButton.style.backgroundColor = "blue"
    })

    eachButton.addEventListener("mouseup", ()=> {
        eachButton.style.backgroundColor = colorPalette.primary
    })

    eachButton.addEventListener("mouseenter", ()=> {
        eachButton.style.backgroundColor = colorPalette.primary
    })

    eachButton.addEventListener("mouseleave", ()=> {
        eachButton.style.backgroundColor = "white"
    })
})


