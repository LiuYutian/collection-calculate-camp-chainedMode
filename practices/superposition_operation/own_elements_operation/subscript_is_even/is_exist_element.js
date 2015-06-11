'use strict';

var _ = require('../../../../myLodash.js');

var is_exist_element = function(collection,element){
    var filterArray = _.filter(collection, function(n, i){
        return i % 2 === 0;
    });

    return _.exist(filterArray, element);
};
module.exports = is_exist_element;
