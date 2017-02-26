var arr = [9,2,4,6,1,3,6,8,9,3,234,667,7,4,33,6,8,5,3,22,4,9,7,6,5,45,2,97663];

function selectionSort(arr, index){
	index = (typeof index !== "undefined") ?  index : 0;

	var comp = index;
	var tmp;
	
	if(!Array.isArray(arr)){
		console.log("error");
		return false;
	}

	if(index === arr.length){
		return arr;
	}

	for(var i = index; i < arr.length; i++){
		if( arr[comp] < arr[i] ){
			comp = i;
		}
	}

	tmp  = arr[comp];
	arr[comp] = arr[index];
	arr[index] = tmp;

	return selectionSort(arr, index + 1);
}

console.log(selectionSort(arr));
