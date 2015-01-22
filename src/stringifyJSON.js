// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  return stringify(obj);
};

var stringify = function(input) {
	switch (typeof(input)){
		case 'object':
			return objectStringify(input);
			break;
		case 'number':
			return input.toString();
			break;
		case 'string':
			return '\"' + input + '\"';
			break;
		case 'boolean':
			return input.toString();
			break;
		case 'undefined':
			return null;
			break;
		default:
			console.log('Why you no write something I understand?');
	}
};

var objectStringify = function(objInput) {
	if (objInput === null){
		return 'null';
	}
	else if (Array.isArray(objInput)) {
		return arrayStringify(objInput);
	}
	else {
		// stringify object elements
	}
};

var arrayStringify = function(arrInput) {
    var start = "[";
	for (var i = 0; i < arrInput.length; i++){
		if (arrInput.length > 1 && i < arrInput.length - 1){
			start = start.concat(stringify(arrInput[i]), "\,");
		}
		else {
			start = start.concat(stringify(arrInput[i]));
		}
	}
	return start.concat("]");
};