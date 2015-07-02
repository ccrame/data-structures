var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.index = 0;

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.index++;
    this[this.index] = value;
  },
  pop: function() {
    var result = this[this.index];
    delete this[this.index];
    if (this.index > 0) {
      this.index--;
    }
    return result;
  },
  size: function() {
    return this.index;
  }
};


