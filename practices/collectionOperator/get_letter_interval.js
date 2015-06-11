'use strict';

var _ = require('../../myLodash.js');

function get_letter_interval(number_a, number_b) {
    var array = _.range(number_a, number_b);
    var result = [];

    _.each(array, function(n){
        result.push(String.fromCharCode(n+96));
    });

    return result;
}

module.exports = get_letter_interval;
