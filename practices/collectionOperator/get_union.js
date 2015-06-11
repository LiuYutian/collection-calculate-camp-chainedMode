'use strict';

function get_union(collection_a, collection_b) {
    var _  = require('../../myLodash.js');
    var array = [];

    _.each(collection_a, function(n){
        array.push(n);
    });

    _.each(collection_b, function(n){
        array.push(n);
    });

    return _.deWeight(array);
}

module.exports = get_union;
