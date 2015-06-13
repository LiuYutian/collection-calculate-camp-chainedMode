'use strict';

var _ = require('../../../myLodash.js');
function amount_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).reduce(function(a, b){
        return a+b;
    }).value();
}

module.exports = amount_even;
