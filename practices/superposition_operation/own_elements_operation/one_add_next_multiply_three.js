'use strict';

var _ = require('../../../myLodash.js');

function one_add_next_multiply_three(collection){
    var resultArray = [];

    _.each(collection, function(n, i){
        if(i < collection.length-1){
            resultArray.push((n + collection[i + 1]) * 3);
        }
    });

    return resultArray;
}
module.exports = one_add_next_multiply_three;
