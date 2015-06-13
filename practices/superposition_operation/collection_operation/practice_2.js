'use strict';

var _ = require('../../../myLodash.js');
function hybrid_operation_to_uneven(collection) {
    return _(collection).filter(function(n){
        return n % 2 != 0;
    }).map(function(n){
        return n * 3 + 2;
    }).value();
}

module.exports = hybrid_operation_to_uneven;
