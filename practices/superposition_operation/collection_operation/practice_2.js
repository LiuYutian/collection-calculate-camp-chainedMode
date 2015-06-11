'use strict';

function hybrid_operation_to_uneven(collection) {
    var _ = require('../../../myLodash.js');

    var array = _.filter(collection, function(n){
        return n % 2 != 0;
    });

    return _.map(array, function(n){
        return n * 3 + 2;
    });
}

module.exports = hybrid_operation_to_uneven;
