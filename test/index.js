var translate = require('../'),
    test = require('grape');

test('normal translate', function(t) {
    t.plan(1);

    t.equal(
        translate(3),
        'translate(3px)'
    );

    t.end();
});
test('X', function(t) {
    t.plan(1);

    t.equal(
        translate('x', 3),
        'translateX(3px)'
    );

    t.end();
});
test('Y', function(t) {
    t.plan(1);

    t.equal(
        translate('y', 3),
        'translateY(3px)'
    );

    t.end();
});
test('Z', function(t) {
    t.plan(1);

    t.equal(
        translate('z', 3),
        'translateZ(3px)'
    );

    t.end();
});
test('3d', function(t) {
    t.plan(1);

    t.equal(
        translate('3d', 3, 4, 5),
        'translate3d(3px,4px,5px)'
    );

    t.end();
});