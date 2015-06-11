'use strict';

function choose_even(collection) {
    var _ = require('../../myLodash.js');

    return _.filter(collection, function(n){
        return n % 2 === 0;
    });
}

module.exports = choose_even;
