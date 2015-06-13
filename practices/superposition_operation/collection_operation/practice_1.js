'use strict';

var _ = require('../../../myLodash.js');
function hybrid_operation(collection) {
    return _(collection).map(function(n){
        return n*3+2;
    }).reduce(function(a,b){
        return a + b;
    }).value();
}

module.exports = hybrid_operation;
