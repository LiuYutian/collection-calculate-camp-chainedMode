'use strict';

var _ = require('../../myLodash.js');
function grouping_count(collection) {
    var object = {};

    _(collection).each(function(n){
        object[n] = object[n] || 0;
        object[n]++;
    });

    return object;
}

module.exports = grouping_count;
