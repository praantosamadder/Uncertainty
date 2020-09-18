class Grid
{
    constructor
    (
        id,                             // ID of the div tag over which the SVG is drawn
        linecap                         // Line edge style
        // wParam,                         // horizontal separation
        // hParam,                         // vertical separation
        // sWidth,                         // width of each 0.1 squares border
        // mWidth,                         // width of each 0.5 squares border
        // lWidth                          // width of 1 square border
    )

    {
        if (id.substr(0, 1) !== "#")
        {
            id = "#" + id
        }

        let graphLineColors = {
            sColor: "#acacac",
            mColor: "#9d9d9d",
            lColor: "#4f4f4f"
        }

        const maximumWidth = 560;
        const maximumHeight = 660;


        // noinspection JSUnresolvedFunction
        let draw = SVG().addTo(id).size(600, 700)

        function oneSquare(x, y, wParam, hParam, sWidth, mWidth, lWidth) {
            let xIterator = x

            let perSquareHeight = hParam * 10;

            // Vertical lines
            //
            // let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
            // line.stroke({ color: graphLineColors.lColor, width: lWidth, linecap: linecap})
            xIterator += wParam

            for (let it = 0; it < 4; it++) {
                let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
                line.stroke({ color: graphLineColors.sColor, width: sWidth, linecap: linecap})
                xIterator += wParam;
            }

            let line1 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
            line1.stroke({ color: graphLineColors.mColor, width: mWidth, linecap: linecap})
            xIterator += wParam

            for (let it = 0; it < 4; it++) {
                let line = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
                line.stroke({ color: graphLineColors.sColor, width: sWidth, linecap: linecap})
                xIterator += wParam;
            }

            let line2 = draw.line(0, perSquareHeight, 0, 0).move(xIterator, y)
            line2.stroke({ color: graphLineColors.lColor, width: lWidth, linecap: linecap})

            let perSquareWidth = wParam * 10

            let yIterator = y;

            let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
            lineV.stroke({color: graphLineColors.lColor, width: lWidth, linecap})
            yIterator += hParam

            for (let it = 0; it < 4; it++) {
                let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
                lineV.stroke({color: graphLineColors.sColor, width: sWidth, linecap: linecap})
                yIterator += hParam;
            }

            let lineV1 = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
            lineV1.stroke({color: graphLineColors.mColor, width: mWidth, linecap: linecap})
            yIterator += hParam

            for (let it = 0; it < 4; it++) {
                let lineV = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
                lineV.stroke({color: graphLineColors.sColor, width: sWidth, linecap: linecap})
                yIterator += hParam;
            }

            // Large width horizontal line drawn at the end to avoid overlapping of thinner lines
            let line = draw.line(0, perSquareHeight, 0, 0).move(x, y)
            line.stroke({ color: graphLineColors.lColor, width: lWidth, linecap: linecap})

            let lineV2 = draw.line(0, 0, perSquareWidth, 0).move(x, yIterator)
            lineV2.stroke({color: graphLineColors.lColor, width: lWidth, linecap: linecap})
        }

        let n = 20;
        while (n < maximumHeight) {
            let n2 = 20;
            while (n2 < maximumWidth) {
                oneSquare(n2, n, 6, 6, 0.7, 1.0,1.5)
                n2 += 60
            }
            n += 60
        }

    }
}