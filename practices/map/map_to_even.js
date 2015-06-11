'use strict';
function map_to_even(collection){
    var _ = require('../../myLodash.js');

    return _(collection).map(function(n){
        return n * 2;
    }).value();

}

module.exports = map_to_even;
