'use strict';

var _ = require('../../../../myLodash.js');

var calculate_average = function(collection){
    var conut = 0;
    return _(collection).filter(function(n, i){
        return i % 2 !== 0;
    }).reduce(function(a, b){
        conut++;
        return a + b;
    }).value()/++conut;
};
module.exports = calculate_average;
