'use strict';

function hybrid_operation(collection) {
    var _ = require('../../../myLodash.js');

    var array = _.map(collection, function(n){
        return n*3+2;
    });

    return _.reduce(array, function(a,b){
        return a + b;
    });
}

module.exports = hybrid_operation;
