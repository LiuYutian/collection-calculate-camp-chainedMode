'use strict';

var _ = require('../../myLodash.js');
function double_to_one(collection) {
    var result = [];

    _(collection).each(function(array){
        if(array.length === undefined){
            result.push(array);
        }else{
            _(array).each(function(n){
                result.push(n);
            });
        }
    });

    return result;
}

module.exports = double_to_one;
