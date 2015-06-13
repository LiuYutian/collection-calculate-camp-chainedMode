'use strict';

var _ = require('../../../myLodash.js');
function average_to_letter(collection) {
    return _().getChar(Math.ceil(_(collection).reduce(function(a, b){
        return a + b;
    }).value()/collection.length));
}

module.exports = average_to_letter;
