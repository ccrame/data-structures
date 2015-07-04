var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree,treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));

};

treeMethods.contains = function(target){
// we have a tree, and a target we're looking for
// we start at the top node (main tree)
// start by checking value of top node against target
  var result = false;
  if (this.value === target) {
    return true;
  } else {
    var i = 0;
    while (!result && i < this.children.length) {
      result = this.children[i].contains(target);
      i++;
    }
  }
  return result;
// if matched, return true, we're done
// if not, check through children
// for each child, we do the steps from line 3 on
//if nothing found in 
};


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addChild: constant
 * contains: linear
 * 
 */