'use strict';

function choose_common_elements(collection_a, collection_b) {
    var _ = require('../../myLodash.js');

    return _.intersection(collection_a, collection_b);
}

module.exports = choose_common_elements;
