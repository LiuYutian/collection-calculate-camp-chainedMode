'use strict';

var _ = require('../../myLodash.js');

function getChar(number) {
    if(number>26) {
        var carry = parseInt(number/26);
        if(number%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(number%26+96);
        }
    }else {
        if(number%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(number%26+96);
        }
    }
}

function get_letter_interval_2(number_a, number_b) {
    return _(number_a).range(number_b).map(function(n){
        return _().getChar(n);
    }).value();
}
module.exports = get_letter_interval_2;
