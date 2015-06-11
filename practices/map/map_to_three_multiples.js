'use strict';

var _ = require("../../myLodash.js");

var map_to_three_multiples = function(collections){
    return _.map(collections, function executor(n){
        return n * 3;
    });
}

module.exports = map_to_three_multiples;
