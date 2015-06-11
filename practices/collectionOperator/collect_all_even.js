'use strict';

function collect_all_even(collection) {
    var _ = require('../../myLodash.js');

    return _.filter(collection, function(n){
        return n % 2 === 0;
    });
}

var array = [];

module.exports = collect_all_even;
