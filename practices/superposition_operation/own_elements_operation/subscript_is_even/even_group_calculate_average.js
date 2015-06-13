'use strict';

var _ = require('../../../../myLodash.js');

var even_group_calculate_average = function(collection){
    var filterArray = _(collection).filter(function(n, i){
        return n % 2 === 0 &&i % 2 != 0;
    }).value();

    var result = [];
    var temp = {};

    _.each(filterArray, function(n){
        temp[n.toString().length] = temp[n.toString().length] || [];
        temp[n.toString().length].push(n);
    });

    for(var key in temp) {
        result.push(mean(temp[key]));
    }

    return result.length === 0 ? [0] : result;
};

function mean(array){
    return _(array).reduce(function(a, b){
        return a + b;
    }).value()/array.length;
}

module.exports = even_group_calculate_average;
