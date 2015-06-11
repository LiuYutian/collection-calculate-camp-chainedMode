'use strict';

var _ = require('../../../../myLodash.js');

var even_group_calculate_average = function(collection){
    var filterArray = _.filter(collection, function(n, i){
        return n % 2 === 0 &&i % 2 != 0;
    });

    var result = [];
    var temp = {};

    _.each(filterArray, function(n){
        temp[n.toString().length] = temp[n.toString().length] || [];
        temp[n.toString().length].push(n);
    });

    for(var key in temp) {
        result.push(_.sum(temp[key])/temp[key].length);
    }

    return result.length === 0 ? [0] : result;
};
module.exports = even_group_calculate_average;
