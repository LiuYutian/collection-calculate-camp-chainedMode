'use strict';

function get_integer_interval_2(number_a, number_b) {
    var _ = require('../../myLodash.js');

    var array = _.range(number_a, number_b);

    return _.filter(array, function(n){
        return n % 2 === 0;
    });
}

module.exports = get_integer_interval_2;
