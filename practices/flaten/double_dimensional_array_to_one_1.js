'use strict';

function double_to_one(collection) {
    var _ = require('../../myLodash.js');
    var result = [];

    _.each(collection, function(array){
        if(array.length === undefined){
            result.push(array);
        }else{
            _.each(array, function(n){
                result.push(n);
            });
        }
    });

    return result;
}

module.exports = double_to_one;
