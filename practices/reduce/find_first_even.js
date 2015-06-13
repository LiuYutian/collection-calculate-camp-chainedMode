'use strict';

function find_first_even(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).first(function(item){
        return item % 2 === 0;
    }).value();
}

module.exports = find_first_even;
