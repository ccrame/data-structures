var BinarySearchTree = function(value){
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;

  return newTree;
};

BinarySearchTree.prototype = {
  left: null,
  right: null,

  insert: function(newValue){
    // if newValue is greater than root value
    if (newValue > this.value) {
      // make a new tree with newValue
      // if right child is null, set the new tree as right child
      if (!this.right) {
        this.right = BinarySearchTree(newValue);
      } else {
        // if right child exists, recursive insert call using the right child as the root
        this.right.insert(newValue);
      }
      
    } 
    // if newValue is less than root
    if (newValue < this.value) {
      // make a new tree with newVal 
      // if left child is null, set the new tree as left child
      if (!this.left) {
        this.left = BinarySearchTree(newValue);
      } else {
        // if left child exists, recursive insert call using the left child as the root
        this.left.insert(newValue);
      }
    } 
    // default (they are equal) behavior, do nothing
  },

  contains: function(searchValue){
    //compare searchValue against value of the current tree
    //if match return boolean true
    if(searchValue === this.value){
      return true;
    }
    //if searchValue greater than node value and right child exists
    if(searchValue > this.value && this.right !== null){
      return this.right.contains(searchValue);
      //recursive call contains on right child
    }
    //if searchValue less than node value and left child exists
    if(searchValue < this.value && this.left !== null){
      return this.left.contains(searchValue);
      //recursive call contains on left child
    }
    //return bool false
    return false;
  },

  depthFirstLog: function(cb){
    //run callback on value
    cb(this.value);
    //if left is not null
    if(this.left !== null){
      //recursive call on left child
      this.left.depthFirstLog(cb);
    }
    //if right is not null
    if(this.right !== null){
      //recursive call on right child
      this.right.depthFirstLog(cb);
    }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Insert should be O(log n) logarithmic time complexity
 * Contains should be O(log n) logarithmic time complexity
 * depthFirstLog should be O(n) linear time complexity since we are forced to traverse every element
 *
 */
