class Gradient {
    constructor
    (
        inputList,
        fractionDigits
    )
    {
        let xArray = []
        let yArray = []
        let xArrayUnc = []
        let yArrayUnc = []

        // declare prototypes

        function mean(list) {
            let sum = 0;
            for (let it = 0; it <= (list.length - 1); it++) {
                sum += list[it]
            }
            return sum/(list.length)
        }

        function multiply(x, y) {
            if (x.length === y.length) {
                let newList = []
                for (let it = 0; it <= (x.length - 1); it++) {
                    newList.push(x[it] * y[it])
                }
                return newList
            } else {
                throw RangeError("Both inputs must be of the same length")
            }
        }

        function gradientBestFit(xList, yList) {
            if (xList.length === yList.length) {
                let st1 = mean(xList) * mean(yList) - mean(multiply(xList, yList));
                let st2 = Math.pow(mean(xList), 2) - mean(xList.square());
                return st1/st2
            } else {
                throw RangeError("Both inputs must be of same length")
            }
        }

        function gradientWorstFit(xList, yList, xUncertainty, yUncertainty) {
            if (xList.length === yList.length) {
                let x2 = xList.maxVal() + xUncertainty[xList.maxIndex()];
                let y2 = yList.maxVal() + yUncertainty[yList.maxIndex()];
                let x1 = xList.minVal() - xUncertainty[xList.maxIndex()];
                let y1 = yList.minVal() - yUncertainty[yList.maxIndex()];

                return (y2 - y1) / (x2 - x1)
            } else throw RangeError("Number of x-coordinates must be equal to number of y-coordinates")

        }

        function yIntercept(xList, yList, m) {
            if (xList.length === yList.length) {
                return (mean(yList) - m * mean(xList))
            } else {
                throw RangeError("Number of x-coordinates must be equal to number of y-coordinates")
            }
        }

        function gradientUncertainty(gradBestFit, gradWorstFit) {
            return Math.abs((gradBestFit - gradWorstFit))
        }



        function convertTupleToList(inputList, sigFigs) {
            let index = 0
//    inputList = [[1.1±0.1, 3.0±0.3], [2.0±0.3, 4±0.4]]
            while (index < inputList.length) {
                let item = inputList[index]
                // item = [1.1±0.1, 3.0±0.3]

                let xc = item[0].replaceAll(" ", "")
                // xc = 1.1±0.1
                let yc = item[1].replaceAll(" ", "")
                // yc = 3.0±0.3

                let xcd = (xc.split("±"))[0];
                xcd = parseFloat(xcd)
                xArray.push(xcd)

                let xcu = (xc.split("±"))[1];
                xcu = parseFloat(xcu)
                xArrayUnc.push(xcu)

                let ycd = (yc.split("±"))[0];
                ycd = parseFloat(ycd)
                yArray.push(ycd)

                let ycu = (yc.split("±"))[1];
                ycu = parseFloat(ycu)
                yArrayUnc.push(ycu)

                index++
            }
        }

        convertTupleToList(inputList, fractionDigits)
        // Outputs

        this.gradBest = gradientBestFit(xArray, yArray)
        this.cBest = yIntercept(xArray, yArray, this.gradBest)
        this.gradWorst = gradientWorstFit(xArray, yArray, xArrayUnc, yArrayUnc)
        this.gradUncertainty = gradientUncertainty(this.gradBest, this.gradWorst)

    }
}