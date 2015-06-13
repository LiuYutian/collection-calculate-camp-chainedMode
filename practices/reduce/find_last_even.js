'use strict';

var _ = require('../../myLodash.js');
function find_last_even(collection) {
    return _(collection).last(function(n){
        return n % 2 === 0;
    }).value();
}

module.exports = find_last_even;
