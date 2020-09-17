
let draw = SVG().addTo('#canvas')

let ih = 25;
let iv = 20;


function oneSquareHorizontal(x, y, wParam, hParam) {
     let xIterator = x

    let perSquareHeight = hParam * 10;

    // Horizontal lines
    
    let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
    line.stroke({ color: '#000', width: 1.5})
    xIterator += wParam

    for (let it = 0; it < 4; it++) {
        let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
        line.stroke({ color: '#3b3b3b', width: 0.7})
        xIterator += wParam;
    }

    let line1 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
    line1.stroke({ color: '#000', width: 1})
    xIterator += wParam

    for (let it = 0; it < 4; it++) {
        let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
        line.stroke({ color: '#3b3b3b', width: 0.7})
        xIterator += wParam;
    }

    let line2 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
    line2.stroke({ color: '#000', width: 1.5})

}

function oneSquareVertical(x, y, wParam, hParam) {

    let perSquareWidth = wParam * 10

    // Vertical lines

    let yIterator = y;

    let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
    lineV.stroke({ color: '#000', width: 1.5})
    yIterator += hParam

    for (let it = 0; it < 4; it++) {
        let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
        lineV.stroke({ color: '#3b3b3b', width: 0.7})
        yIterator += hParam;
    }

    let lineV1 = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
    lineV1.stroke({ color: '#000', width: 1})
    yIterator += hParam

    for (let it = 0; it < 4; it++) {
        let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
        lineV.stroke({ color: '#3b3b3b', width: 0.7})
        yIterator += hParam;
    }


    let lineV2 = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
    lineV2.stroke({ color: '#000', width: 1.5})

}

function oneSquare(x, y, wParam, hParam) {
    oneSquareHorizontal(x, y, wParam, hParam)

    oneSquareVertical(x, y, wParam, hParam)
}

oneSquare(ih, iv, 6, 6)
oneSquare(ih + 60, iv, 6, 6)
oneSquare(ih + 120, iv, 6, 6)
oneSquare(ih + 180, iv, 6, 6)
oneSquare(ih + 240, iv, 6, 6)
oneSquare(ih + 30, iv, 6, 6)
oneSquare(ih + 360, iv, 6, 6)
