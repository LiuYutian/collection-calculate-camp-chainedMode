'use strict';

var _ = require('../../../myLodash.js');

var even_asc_odd_desc = function(collection){
    collection = _.sort(collection, function(a, b){
        return a > b;
    });

    var evenArray = [];
    var oddArray = [];

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 === 0) {
            evenArray.push(collection[i]);
        }else {
            oddArray.push(collection[i]);
        }
    }

    for(var i = oddArray.length-1; i >= 0; i--) {
        evenArray.push(oddArray[i]);
    }

    return evenArray;
};
module.exports = even_asc_odd_desc;
