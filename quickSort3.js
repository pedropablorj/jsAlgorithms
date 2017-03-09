var arr = [1,2,56,3,3,4,7,9,6,4,3,5,7,86,4,4,5,23,4,4];

function quickSort (arr){
	if(arr.length < 2){
		return arr;
	}
	
	var p = arr[Math.floor(Math.random(arr.length-1))];
	var c = [];
	var l = [];
	var r = [];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === p){
			c.push(arr[i]);
		}else if(arr[i] <= p){
			l.push(arr[i]);
		}else{
			r.push(arr[i]);
		}
	}

	return Array.prototype.concat(quickSort(l), c, quickSort(r));
}
console.log("Input:", arr);
console.log("Output:",quickSort(arr));
