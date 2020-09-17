
let draw = SVG().addTo('#main-graph-output')

let ih = 25;
let iv = 20;

let sColor = "#acacac";
let mColor = "#9d9d9d"
let lColor = "#4f4f4f";


function oneSquareHorizontal (startX, startY, wParam, hParam, sWidth, mWidth, lWidth) {
    let xIterator = startX

    let perSquareHeight = hParam * 10;

    // Horizontal lines

    let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, startY)
    line.stroke({ color: lColor, width: lWidth})
    xIterator += wParam

    for (let it = 0; it < 4; it++) {
        let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, startY)
        line.stroke({ color: sColor, width: sWidth})
        xIterator += wParam;
    }

    let line1 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, startY)
    line1.stroke({ color: mColor, width: mWidth})
    xIterator += wParam

    for (let it = 0; it < 4; it++) {
        let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, startY)
        line.stroke({ color: sColor, width: sWidth})
        xIterator += wParam;
    }

    let line2 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, startY)
    line2.stroke({ color: lColor, width: lWidth})

}

function oneSquareVertical(startX, startY, wParam, hParam, sWidth, mWidth, lWidth) {

    let perSquareWidth = wParam * 10

    // Vertical lines

    let yIterator = startY;

    let lineV = draw.line(0, 0, perSquareWidth, 0).move(startX, yIterator)
    lineV.stroke({ color: lColor, width: lWidth})
    yIterator += hParam

    for (let it = 0; it < 4; it++) {
        let lineV = draw.line(0, 0, perSquareWidth, 0).move(startX, yIterator)
        lineV.stroke({ color: sColor, width: sWidth})
        yIterator += hParam;
    }

    let lineV1 = draw.line(0, 0, perSquareWidth, 0).move(startX, yIterator)
    lineV1.stroke({ color: mColor, width: mWidth})
    yIterator += hParam

    for (let it = 0; it < 4; it++) {
        let lineV = draw.line(0, 0, perSquareWidth, 0).move(startX, yIterator)
        lineV.stroke({ color: sColor, width: sWidth})
        yIterator += hParam;
    }


    let lineV2 = draw.line(0, 0, perSquareWidth, 0).move(startX, yIterator)
    lineV2.stroke({ color: lColor, width: lWidth})

}

oneSquareHorizontal(25, 20, 4, 4, 0.7, 1.0,1.5)
oneSquareVertical(25, 20, 4, 4, 0.7, 1.0, 1.5)

// oneSquareCm()
// oneSquareCm()
