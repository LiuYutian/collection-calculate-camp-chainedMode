'use strict';
function map_to_even(collection){
    var _ = require('../../myLodash.js');

    return _.map(collection, function(n){
        return n * 2;
    })
}

module.exports = map_to_even;
