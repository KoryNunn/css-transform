var translate = require('../'),
    test = require('grape');

test('create div', function(t) {
    t.plan(1);

    var testElement = crel('div', {'class':'thing'});

    t.equal(
        testElement.tagName,
        'DIV'
    );

    t.end();
});