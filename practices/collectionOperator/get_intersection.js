'use strict';
var _  = require('../../myLodash.js');

function get_intersection(collection_a, collection_b) {

    return _.intersection(collection_b, collection_a);
}

module.exports = get_intersection;
