'use strict';

var _ = require('../../myLodash.js');

function compare_collections(collection_a, collection_b) {
    var result = true;

    if(collection_a.length != collection_b.length) {
        return false;
    }

    _(collection_a).each(function(n, i){
        if(n != collection_b[i]){
            result = false;
        }
    });

    return result;
}

module.exports = compare_collections;
