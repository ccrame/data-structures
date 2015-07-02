var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.firstKey = 0;
  newQueue.lastKey = 0;

  extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.lastKey] = value;
    this.lastKey++;
  },
  
  dequeue: function() {
    var result = this[this.firstKey];

    if (this.firstKey < this.lastKey) {
      delete this[this.firstKey];
      this.firstKey++;
    }

    return result;
  },
  
  size: function() {
    return this.lastKey - this.firstKey;
  }
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};