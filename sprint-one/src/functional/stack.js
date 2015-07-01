var Stack = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    length += 1;
    storage[length] = value;
  };

  someInstance.pop = function(){
    var popped = storage[length];
    delete storage[length];
    if(length > 0){
      length -= 1;
    }
    return popped;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
