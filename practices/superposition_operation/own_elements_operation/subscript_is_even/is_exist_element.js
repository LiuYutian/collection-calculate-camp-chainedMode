'use strict';

var _ = require('../../../../myLodash.js');
var is_exist_element = function(collection,element){
    return _(collection).filter(function(n, i){
        return i % 2 === 0;
    }).exist(element);
};
module.exports = is_exist_element;
