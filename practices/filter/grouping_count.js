'use strict';

function grouping_count(collection) {
    var _ = require('../../myLodash.js');
    var object = {};

    _.each(collection, function(n){
        object[n] = object[n] || 0;
        object[n]++;
    });
    
    return object;
}

module.exports = grouping_count;
