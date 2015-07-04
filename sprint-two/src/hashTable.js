var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v){
  this.counter++;
  if(this.counter > this._limit * 3 / 4){
    this.resize(this._limit * 2);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  bucket.push([k,v]);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  var result = null;
  for(var i = 0; i < bucket.length; ++i){
    if(bucket[i][0] === k){
      result = bucket[i][1];
    }//if
  }//for
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var i = 0; i < bucket.length; ++i){
    if(bucket[i][0] === k){
      bucket.splice(i,1);
      this.counter--;
        if(this.counter < this._limit/4 ){
          this.resize(this._limit/2);
        }
    }//if
  }//for
};

HashTable.prototype.resize = function(size){
  var tempLimit = this._limit;
  this._limit = size;
  var tempStorage = this._storage;
  this._storage = LimitedArray(size); 
  this.counter = 0;
  var tempThis = this;

  //iterate through bucket
  tempStorage.each(function(bucket){
    bucket = bucket || [];
    //iterate through tuples in bucket
    for(var i = 0; i < bucket.length; ++i){
      //get tuple key-pair values from bucket
      var tempTuple = bucket[i];
      //run key through hashing function using new size
      //var newHash = getIndexBelowMaxForKey(tempTuple[0],size);
      //use set helper function to put key pair tuple under new index
      HashTable.prototype.insert.call(tempThis,tempTuple[0],tempTuple[1]);
    }//for
  });
}




/*
 * Complexity: What is the time complexity of the above functions?
 */
