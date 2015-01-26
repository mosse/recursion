// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];

  var checkElementClass = function(node){

    var nodeClass = node.classList;
    var children = node.childNodes;

    if (nodeClass){
      if (nodeClass.contains(className)){
        results.push(node);
      }
    }
    if (children){
      for (var i = 0; i <children.length; i++){
        checkElementClass(children[i]);
      }
    }
  };

  checkElementClass(document.body);

  return results;

};
