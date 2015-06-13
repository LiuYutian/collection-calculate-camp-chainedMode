'use strict';

var _ = require('../../../myLodash.js');
function median_to_letter(collection) {
    return _().getChar(Math.ceil(_(collection).median()));
}

module.exports = median_to_letter;
