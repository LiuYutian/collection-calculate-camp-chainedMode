'use strict';

function average_to_letter(collection) {
    var _ = require('../../../myLodash.js');

    var sum = _.reduce(collection, function(a, b){
        return a + b;
    });

    return String.fromCharCode(Math.ceil(sum/collection.length)+96);
}

module.exports = average_to_letter;
