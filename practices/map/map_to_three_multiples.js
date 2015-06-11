'use strict';

var _ = require("../../myLodash.js");
var map_to_three_multiples = function(collections){
    return _(collections).map(function executor(n){
        return n * 3;
    }).value();
}

module.exports = map_to_three_multiples;
