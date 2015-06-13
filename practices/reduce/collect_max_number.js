'use strict';

function collect_max_number(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).reduce(function(a, b){
        return Math.max(a,b);
    }).value();
}

module.exports = collect_max_number;
