var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var tempNode = Node(value);
    if(list.head !== null){
      list.tail.next = tempNode;
    } else {
      list.head = tempNode;
    }
    list.tail = tempNode;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target, node){

    if(node === undefined){
      node = list.head;
    }
    if(node === null){
      return false;
    } else {
      if(node.value === target){
        return true;
      } else {
        return list.contains(target,node.next);
      }
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail and removeHead should both be O(1) constant time operations
 * contains should be a O(n) linear time operation
 *
 */
