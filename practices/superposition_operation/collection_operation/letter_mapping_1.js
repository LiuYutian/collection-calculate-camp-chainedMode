'use strict';

var _ = require('../../../myLodash.js');
function even_to_letter(collection) {
    return _(collection).filter(function(n){
        return n % 2 === 0;
    }).map(function(n){
        return String.fromCharCode(n+96);
    }).value();
}

module.exports = even_to_letter;
