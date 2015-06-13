'use strict';

function compute_average(collection) {
    var _ = require('../../myLodash.js');

    var sum = _(collection).reduce(function(a, b){
        return a + b;
    }).value();

    return  sum / collection.length;
}

module.exports = compute_average;
