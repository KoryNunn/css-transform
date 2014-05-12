# css-translate

A very basic css translate string builder

# Usage #

In a console:

    npm i css-translate

Then in your js:

    var translate = require('css-translate');

    translate('3d', 30, 40, 50);
    // -> "translate3d(30px,40px,50px)"

More reasonable usage:

    myDiv.style[venfix('transform')] = translate('3d', 30, 40, 50);