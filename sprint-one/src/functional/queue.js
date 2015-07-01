var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstKey = 1;
  var lastKey = 1;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastKey] = value;
    lastKey++;
  };

  someInstance.dequeue = function(){
    var result = storage[firstKey];
    if (firstKey < lastKey) {
      delete storage[firstKey];
      firstKey++;
    }
    return result;
  };

  someInstance.size = function(){
    return lastKey - firstKey;
  };

  return someInstance;
};
