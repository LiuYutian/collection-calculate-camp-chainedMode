'use strict';

var _ = require('../../myLodash.js');
function choose_no_repeat_number(collection) {
    var array = [];

    _(collection).each(function(n){
        if(!_(array).exist(n)){
            array.push(n);
        }
    });

    return array;
}

module.exports = choose_no_repeat_number;
