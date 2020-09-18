let tt = [["10±1", "1.3±0.2"], ["15±1", "1.6±0.1"], ["20±1", "2.0±0.1"], ["25±1", "2.3±0.1"], ["30±1", "2.6±0.1"], ["35±1", "2.9±0.1"],]

let gb = new Graph(tt, 3);
console.log("Gradient: " + gb.gradBestFitLine)
console.log("Y-intercept of best fit: " + gb.cBestFitLine)
console.log("Angle with x-axis in degrees: " + (gb.gradBestFitLine).toDegree())
console.log("m of Line of Worst Fit: " + gb.gradWorstFitLine)
console.log("m = " + gb.gradient)
console.log("Y-intercept: " + gb.constant)
console.log("equation: " + gb.equation)

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

    item.addEventListener("input", () => {
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

let g = new Grid("main-graph-output", "round")
