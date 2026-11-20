var MyHashSet = function() {
    this.set = new Array(1000001).fill(false);
};

MyHashSet.prototype.add = function(key) {
    this.set[key] = true;
};

MyHashSet.prototype.remove = function(key) {
    this.set[key] = false;
};

MyHashSet.prototype.contains = function(key) {
    return this.set[key];
};