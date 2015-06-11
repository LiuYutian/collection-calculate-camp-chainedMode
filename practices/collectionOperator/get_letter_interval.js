'use strict';

var _ = require('../../myLodash.js');

function get_letter_interval(number_a, number_b) {
    return _(number_a).range(number_b).map(function(n){
        return String.fromCharCode(n+96);
    }).value();
}


module.exports = get_letter_interval;
