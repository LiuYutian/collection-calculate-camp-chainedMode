'use strict';

var _ = require('../../../../myLodash.js');

var calculate_median = function(collection){
    var array = _.filter(collection, function(n, i){
        return i % 2 === 0;
    });

    return _.median(array);
};
module.exports = calculate_median;
