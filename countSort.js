var arr = [8,9,3,23,6,7,4,33,6,8,5,3,22,4,9,7,6,5,5,2,9]; 

function sort(arr){
	var tmpArr = [];
	
	for(var i = 0; i < arr.length; i++){	
		tmpArr[arr[i]] =  (typeof(tmpArr[arr[i]]) === "number") ? ++tmpArr[arr[i]] : 1;
	}
	
	arr = [];

	for(i = 0; i < tmpArr.length; i++){
		if(tmpArr[i]){
			for(var j = 0; j < tmpArr[i]; j++){
				arr.push(i);
			}
		}	
	}
	
	return arr;
}


//Input
console.log(arr);
//Output
console.log(sort(arr));
