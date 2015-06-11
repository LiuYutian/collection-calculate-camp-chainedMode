'use strict';

function choose_no_repeat_number(collection) {
    var _ = require('../../myLodash.js');
    var array = [];

    _.each(collection, function(n){
        if(!_.exist(array, n)){
            array.push(n);
        }
    });

    return array;
}

module.exports = choose_no_repeat_number;
