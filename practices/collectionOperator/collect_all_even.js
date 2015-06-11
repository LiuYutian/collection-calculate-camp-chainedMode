'use strict';

function collect_all_even(collection) {
    var _ = require('../../myLodash.js');

    return _(collection).filter(function(n){
        return n % 2 === 0;
    }).value();
}
module.exports = collect_all_even;
