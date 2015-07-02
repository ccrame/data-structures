var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.length = 0;
  extend(newStack,stackMethods);
  return newStack;
};

var stackMethods = {

  pop: function() {
    var result = this[this.length];
    delete this[this.length];
    if(this.length > 0){
      this.length--;
    }
    return result;
  },

  push: function(value){
    this.length++;
    this[this.length] = value;
  },

  size: function(){
    return this.length;
  }

};

var extend = function(obj1,obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }
};

