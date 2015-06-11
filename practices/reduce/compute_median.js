'use strict';

var _ = require('../../myLodash.js');

function compute_median(collection) {
    collection = _.sort(collection, function(a, b){
        return a > b;
    });

    return _.median(collection);
}

module.exports = compute_median;
