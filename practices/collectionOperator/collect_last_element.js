'use strict';

function collect_last_element(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).last().value();
}

module.exports = collect_last_element;
