'use strict';

var _ = require('../../../myLodash.js');

function median_to_letter(collection) {
    return MapChar(Math.ceil(_.median(collection)));
}

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
}

module.exports = median_to_letter;
