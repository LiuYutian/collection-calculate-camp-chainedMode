'use strict';

var _ = require('../../../myLodash.js');

function rank_by_two_large_one_small(collection){
    collection = _(collection).sort(function(a, b){
        return a < b;
    });

    for(var i = 0; i < collection.length-2; i += 3) {
        var temp = collection[i];
        collection[i] = collection[i+1];
        collection[i+1] = collection[i+2];
        collection[i+2] = temp;
    }

    return collection;
}
module.exports = rank_by_two_large_one_small;
