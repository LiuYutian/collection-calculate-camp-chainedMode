'use strict';
var number_map_to_word_over_26 = function(collection){
    var _ = require('../../myLodash.js');

    return _.map(collection, function(n){
        return MapChar(n);
    });
};

function MapChar(n) {
    if(n>26) {
        var carry = parseInt(n/26);
        if(n%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(n%26+96);
        }
    }else {
        if(n%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(n%26+96);
        }
    }
};

module.exports = number_map_to_word_over_26;
