'use strict';

var _ = require('../../myLodash.js');

var rank_desc = function(collection){
    return _.sort(collection, function(a, b){
        return a > b;
    });
};

module.exports = rank_desc;
