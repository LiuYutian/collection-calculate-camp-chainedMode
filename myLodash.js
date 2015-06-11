function each(collection, iterate) {
    for(var i = 0; i < collection.length; i++) {
        iterate(collection[i], i);
    }
}

function map(collections, executor){
    var array = [];

    each(collections, function(item) {
        array.push(executor(item));
    });

    return array;
}

function filter(collections, executor){
    var array = [];

    each(collections, function(n, i){
        if(executor(n, i)){
            array.push(n);
        }
    });

    return array;
}

function reduce(collections, fun) {
    var result;

    each(collections, function(value, key){
        if(key === 0) {
            result = value;
        }else{
            result = fun(result, value);
        }
    });

    return result;
}

function first(collections, executor){
    var array = collections;

    if(typeof(executor) === 'function'){
        array = filter(collections, executor);
    }

    return reduce(array, function(a, b){
        return a;
    });
}

function last(collections, executor){
    var array = collections;

    if(typeof(executor) === 'function'){
        array = filter(collections, executor);
    }

    return reduce(array, function(a, b){
        return b;
    });
}

function range(number_a, number_b) {
    var length = Math.abs(number_a - number_b);
    var array = [];

    for(var i = 0; i <= length; i++) {
        if(number_a >= number_b){
            array.push(number_a--);
        }else{
            array.push(number_a++);
        }
    }

    return array;
}

function intersection(array1, array2){
    var result = [];

    each(array1, function(n1){
        each(array2, function(n2){
            if(n1 === n2){
                result.push(n1);
            }
        });
    });

    return result;
}

function exist(array, value){
    var bool = false;

    each(array, function(n){
        if(n === value){
            bool = true;
        }
    });

    return bool;
}

function deWeight(srcArray){
    var array = [];

    for(var i = 0; i < srcArray.length; i++) {
        var exist = false;

        for(var j = 0; j < array.length; j++) {
            if(srcArray[i] === array[j]) {
                exist = true;
                break;
            }
        }
        if(!exist) {
            array[array.length] = srcArray[i];
        }
    }

    return array;
}

function sort(collection, fun){
    if(collection.length === 0){
        return collection;
    }
    var array = [];

    each(collection, function(n){
        array.push(n)
    });

    for(var i = 0; i < array.length; i++) {
        for(var j = i + 1; j < array.length; j++) {
            if(fun(array[i], array[j])){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

function median(collection){
    collection = sort(collection, function(a, b){
        return a > b;
    });

    if(collection.length % 2 === 0) {
        return (collection[collection.length/2-1]+collection[collection.length/2])/2;
    }else{
        return collection[parseInt(collection.length/2)];
    }
}

function sum(collection){
    var s = 0;

    each(collection, function(n){
        s += n;
    });
    return s;
}

module.exports = {
    'map' : map,
    'each' : each,
    'filter' : filter,
    'first' : first,
    'last' : last,
    'reduce' : reduce,
    'range' : range,
    'intersection' : intersection,
    'exist' : exist,
    'deWeight' : deWeight,
    'sort' : sort,
    'median' : median,
    'sum' : sum
};
