var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.firstKey = 0;
  this.lastKey = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  this.storage[this.lastKey] = value;
  this.lastKey++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  if(this.size() > 0){
    this.firstKey++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this.lastKey - this.firstKey;
};
