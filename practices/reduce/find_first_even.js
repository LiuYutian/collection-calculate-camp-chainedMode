'use strict';

function find_first_even(collection) {
    var _ = require('../../myLodash.js');

    return _.first(collection, function(item){
        return item % 2 === 0;
    });
}

module.exports = find_first_even;
