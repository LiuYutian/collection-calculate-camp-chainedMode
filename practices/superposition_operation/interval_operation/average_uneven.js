'use strict';

function average_uneven(collection) {
    var _ = require('../../../myLodash.js');

    var array = _.filter(collection, function(n){
        return n % 2 != 0;
    });

    var sum = _.reduce(array, function(a, b){
        return a + b;
    });

    return sum / array.length;
}

module.exports = average_uneven;
