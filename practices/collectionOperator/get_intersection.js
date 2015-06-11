'use strict';
var _  = require('../../myLodash.js');

function get_intersection(collection_a, collection_b) {

    return _(collection_b).intersection(_(collection_a)).value();
}

module.exports = get_intersection;
