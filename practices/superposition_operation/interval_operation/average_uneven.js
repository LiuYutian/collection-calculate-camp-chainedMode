'use strict';

var _ = require('../../../myLodash.js');
function average_uneven(collection) {
    var length = 0;
    return _(collection).filter(function(n){
        return n % 2 != 0;
    }).reduce(function(a, b){
        length++;
        return a + b;
    }).value()/ ++length;
}

module.exports = average_uneven;
