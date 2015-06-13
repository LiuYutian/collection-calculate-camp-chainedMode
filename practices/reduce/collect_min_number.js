'use strict';

function collect_min_number(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).reduce(function(a, b){
        return Math.min(a, b);
    }).value();
}

module.exports = collect_min_number;
