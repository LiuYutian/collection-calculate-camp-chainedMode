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

myLodash.prototype.map = function(fun){
    var array = [];

    this.each(function(n, i){
        array.push(fun(n, i));
    });

    this.collection = array;

    return this;
}

myLodash.prototype.value = function(){
    return this.collection;
}

module.exports = myLodash;
