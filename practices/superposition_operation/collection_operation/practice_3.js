'use strict';

var _ = require('../../../myLodash.js');
function hybrid_operation_to_uneven(collection) {
    return _(collection).filter(function(n){
        return n % 2 != 0;
    }).map(function(n){
        return n * 3 + 5;
    }).reduce(function(a, b){
        return a + b;
    }).value();
}

module.exports = hybrid_operation_to_uneven;
