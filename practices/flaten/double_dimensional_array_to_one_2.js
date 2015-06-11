'use strict';

function double_to_one(collection) {
    var _ = require('../../myLodash.js');
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

    return _(result).deWeight().value();
}

module.exports = double_to_one;
