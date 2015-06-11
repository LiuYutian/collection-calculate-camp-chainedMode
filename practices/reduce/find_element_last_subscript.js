'use strict';

function calculate_elements_sum(collection, element) {
    var _ = require('../../myLodash.js');
    var result = -1;

    _.each(collection, function(n, i){
        if(n === element) {
            result = i;
        }
    });

    return result;
}

module.exports = calculate_elements_sum;
