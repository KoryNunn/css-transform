var unitr = require('unitr'),
    types = {
        '3d': '3d',
        'x': 'X',
        'y': 'Y',
        'z': 'Z',
        '2d': '',
        '': ''
    };

module.exports = function(type, x, y, z){
    if(!isNaN(type)){
        z = y;
        y = x;
        x = type;
        type = null;
    }

    type = type && type.toLowerCase() || '';

    var args = [];

    x != null && args.push(unitr(x));
    y != null && args.push(unitr(y));
    z != null && args.push(unitr(z));

    return 'translate' +
        types[type] +
        '(' +
        args.join(',') +
        ')';
}