var arr = [8,9,3,234,667,7,4,33,6,8,5,3,22,4,9,7,6,5,45,2,97663];

function sort(arr, i){
	i = (typeof i === "undefined") ? 0 : i; 
	var tmp;

	if(!Array.isArray(arr)){
		console.log("error");
		return false;
	}

	if(i === arr.length - 1){
		return arr;
	}

	for (var j = 1; j < arr.length - i; j++){
		if(compare(arr[j-1], arr[j])){
			//Swap
			tmp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = tmp;
		}
	}

	return sort(arr, ++i);
}

function compare(a, b){
	return (a > b) ? true : false;
}

//Input
console.log(arr);
//Output
console.log(sort(arr));
