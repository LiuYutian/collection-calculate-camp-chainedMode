'use strict';

var _  = require('../../myLodash.js');
function get_union(collection_a, collection_b) {

    return _(collection_a).concat(collection_b).deWeight().value();
}

module.exports = get_union;
