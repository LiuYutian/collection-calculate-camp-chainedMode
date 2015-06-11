'use strict';

var _ = require('../../../../myLodash.js');

var calculate_average = function(collection){
    var array = _.filter(collection, function(n, i){
        return i % 2 !== 0;
    });

    var sum = 0;

    _.each(array, function(n){
        sum += n;
    });


    return sum / array.length;
};
module.exports = calculate_average;
