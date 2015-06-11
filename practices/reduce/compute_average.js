'use strict';

function compute_average(collection) {
    var _ = require('../../myLodash.js');

    var sum = _.reduce(collection, function(a, b){
        return a + b;
    });

    return  sum / collection.length;
}

module.exports = compute_average;
