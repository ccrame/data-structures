

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  // stores key-value pairs as 'node value':'edge list object'
  this.storage[node] = {};
};

Graph.prototype.contains = function(node){
  // this.storage[node] returns undefined if node is not in the graph
  return !!this.storage[node];
};

Graph.prototype.removeNode = function(node){
  for (var key in this.storage[node]) {
    delete this.storage[key][node];
  }
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!this.storage[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // this.storage[fromNode] references the edge list object for fromNode
  // makes a key-value pair in the edge list as 'toNode':true
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: constant time
 * contains: constant time
 * removeNode: linear time
 * hasEdge: linear time
 * addEdge: constant time
 * removeEdge: constant time
 * forEachNode: linear multiplied by time complexity of callback function
 */


