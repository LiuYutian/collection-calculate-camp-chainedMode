'use strict';

function collect_max_number(collection) {
    var _ = require('../../myLodash.js');

    return _.reduce(collection, function(a, b){
        return Math.max(a,b);
    });
}

module.exports = collect_max_number;
