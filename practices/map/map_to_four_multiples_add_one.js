'use strict';

var _ = require('../../myLodash.js');
var map_to_four_multiples_add_one = function(collection){
    return _(collection).map(function(n){
        return n * 4 + 1;
    }).value();
}

module.exports = map_to_four_multiples_add_one;
