'use strict';

var _ = require('../../myLodash.js');
var number_map_to_word = function(collection){
    return _(collection).map(function(n){
        return _().getChar(n);
    }).value();
};

module.exports = number_map_to_word;
