function myLodash(collection) {
    if(!(this instanceof myLodash)){
        return new myLodash(collection);
    }

    this.collection = collection;
}

myLodash.prototype.each = function(fun){
    for(var i = 0; i < this.collection.length; i++) {
        fun(this.collection[i], i);
    }
}

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
    if(number>26) {
        var carry = parseInt(number/26);
        if(number%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(number%26+96);
        }
    }else {
        if(number%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(number%26+96);
        }
    }
}

myLodash.prototype.value = function(){
    return this.collection;
}

module.exports = myLodash;
