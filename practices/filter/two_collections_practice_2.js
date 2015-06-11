'use strict';

var _ = require('../../myLodash.js');
function choose_no_common_elements(collection_a, collection_b) {
    var result = [];

    _(collection_a).each(function (n) {
        if (!_(collection_b).exist(n)) {
            result.push(n);
        }
    });

    _(collection_b).each(function (n) {
        if (!_(collection_a).exist(n)) {
            result.push(n);
        }
    });

    return result;
}

module.exports = choose_no_common_elements;
