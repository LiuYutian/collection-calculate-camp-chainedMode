'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var _ = require('../../myLodash.js');
    var array = [];

    _(collection_a).each(function(a){
        _(collection_b).each(function(b){
            if(a % b === 0){
                array.push(a);
            }
        });
    });

    return array;
}

module.exports = choose_divisible_integer;
