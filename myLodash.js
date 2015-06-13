function myLodash(collection) {
    if(!(this instanceof myLodash)){
        return new myLodash(collection);
    }

    this.collection = collection;
}

function each(collection, fun){
    for(var i = 0; i < collection.length; i++) {
        fun(collection[i], i);
    }
}

myLodash.prototype.each = function(fun){
    each(this.collection, fun);
};

myLodash.each = each;


myLodash.prototype.map = function(fun) {
    var array = [];

    this.each(function(n, i){
        array.push(fun(n, i));
    });

    this.collection = array;

    return this;
}

myLodash.prototype.filter = function(fun) {
    var array = [];

    this.each(function(n, i){
        if(fun(n, i)){
            array.push(n);
        }
    });

    this.collection = array;

    return this;
}

myLodash.prototype.reduce = function(fun){
    var result;

    this.each(function(value, i){
        if(i === 0) {
            result = value;
        }else{
            result = fun(result, value);
        }
    });

    this.collection = result;

    return this;
}

myLodash.prototype.first = function(fun){
    if(typeof(fun) === 'function'){
        this.collection = this.filter(fun).value();
    }

    this.collection = this.reduce(function(a, b){
        return a;
    }).value();

    return this;
}

myLodash.prototype.last = function(fun){
    if(typeof(fun) === 'function'){
        this.collection = this.filter(fun).value();
    }

    this.collection = this.reduce(function(a, b){
        return b;
    }).value();

    return this;
}

myLodash.prototype.range = function(number){
    var length = Math.abs(this.collection - number);
    var array = [];

    for(var i = 0; i <= length; i++) {
        if(this.collection >= number){
            array.push(this.collection--);
        }else{
            array.push(this.collection++);
        }
    }

    this.collection = array;

    return this;
}

myLodash.prototype.intersection = function(collection_a){
    var result = [];

    this.each(function(n1){
        myLodash(collection_a).each(function(n2){
            if(n1 === n2) {
                result.push(n1);
            }
        });
    });

    this.collection = result;
    return this;
}

myLodash.prototype.getChar = function(number){
    var unit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var elses = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return result = elses[parseInt((number-1) / 26)] + unit[(number-1) % 26];
}

myLodash.prototype.concat = function(array){
    var resultArray = [];

    this.each(function(n){
        resultArray.push(n);
    });

    myLodash(array).each(function(n){
        resultArray.push(n);
    });
    this.collection = resultArray;

    return this;
}

myLodash.prototype.deWeight = function(){
    var temp = {};
    var array = [];

    this.each(function(n){
        temp[n+" "] = temp[n+" "] || 0;
    });

    for(var key in temp) {
        array.push(parseInt(key));
    }
    this.collection = array;

    return this;
}

myLodash.prototype.exist = function(value) {
    var bool = false;

    this.each(function(n){
        if(n === value) {
            bool = true;
        }
    });

    return bool;
}

myLodash.prototype.sort = function(fun){
    var array = [];
    this.each(function(n){
        array.push(n);
    });

    myLodash.each(array, function(n1, i1){
        myLodash.each(array, function(n2, i2){
            if(fun(array[i1], array[i2])) {
                var temp = array[i1];
                array[i1] = array[i2];
                array[i2] = temp;
            }
        });
    });

    return array;
}

myLodash.prototype.median = function(){
    this.collection = myLodash(this.collection).sort(function(a, b){
        return a > b;
    });

    if(this.collection.length % 2 === 0) {
        return (this.collection[this.collection.length/2-1]+this.collection[this.collection.length/2])/2;
    }else{
        return this.collection[parseInt(this.collection.length/2)];
    }
}

myLodash.prototype.value = function(){
    return this.collection;
}

module.exports = myLodash;
