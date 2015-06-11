'use strict';

function choose_even(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).filter(function(n){
        return n % 2 === 0;
    }).value();
}

module.exports = choose_even;
