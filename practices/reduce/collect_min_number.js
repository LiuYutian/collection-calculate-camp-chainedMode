'use strict';

function collect_min_number(collection) {
    var _ = require('../../myLodash.js');

    return _.reduce(collection, function(a, b){
        return Math.min(a, b);
    });
}

module.exports = collect_min_number;
