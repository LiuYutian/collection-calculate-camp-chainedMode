'use strict';

var _ = require('../../../../myLodash.js');

var single_element = function(collection){
    var array = _(collection).filter(function(n, i){
        return i % 2 != 0;
    }).value();

    var objectArray = [];

    for(var i = 0; i < array.length; i++) {
        var exist = false;
        for(var j = 0; j < objectArray.length; j++) {
            if(array[i] === objectArray[j].num) {
                objectArray[j].count++;
                exist = true;
            }
        }
        if(!exist) {
            objectArray.push({
                num : array[i],
                count : 1
            });
        }
    }

    var resultArray = [];

    _(objectArray).each(function(n, i){
        if(n.count === 1){
            resultArray.push(n.num)
        }
    });

    return resultArray;
};
module.exports = single_element;
