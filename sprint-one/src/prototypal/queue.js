var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.firstKey = 0;
  newQueue.lastKey = 0;
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.lastKey] = value;
    this.lastKey++;
  },
  dequeue: function(){
    var result = this[this.firstKey];
    delete this[this.firstKey];
    if(this.size() > 0){
      this.firstKey++;
    }
    return result;
  },
  size: function(){
    return this.lastKey - this.firstKey;
  }
};


