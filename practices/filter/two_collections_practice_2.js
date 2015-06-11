'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var _ = require('../../myLodash.js');
    var result = [];

    _.each(collection_a,function (letter) {
        if (!_.exist(collection_b,letter)) {
            result[result.length] = letter;
        }
    });

    _.each(collection_b,function (letter) {
        if (!_.exist(collection_a,letter)) {
            result[result.length] = letter;
        }
    });

    return result;
}

module.exports = choose_no_common_elements;
