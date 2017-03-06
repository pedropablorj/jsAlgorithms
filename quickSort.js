var arr = [8,9,3,23,6,7,4,33,6,8,5,3,22,4,9,7,6,5,5,2];

function quickSort(arr, l , r){
	l = (typeof l === "undefined") ? 0 : l;
	r = (typeof r === "undefined") ? arr.length -1 : r;
	j = l;

	var pivot =  Math.floor((Math.random() * r) + l); 
	
	pivot = (pivot > r || pivot < l) ? l : pivot;

	swap(arr, l, pivot);
	
	for(var i = l + 1; i <= r; i++){
		if(arr[i] <= arr[l]){
			j++;
			if(j !== i){
				swap(arr, j, i);
			}
		}
	}

	swap(arr, j, l);

	if(j < r){
		arr = quickSort(arr, j+1, r);
	}

	if(j > l){
		arr = quickSort(arr, l, j-1);
	}
	
	return arr;
}


function swap(arr, iOne, iTwo){
	var tmp = arr[iOne];
	
	arr[iOne] = arr[iTwo];
	arr[iTwo] =tmp;
	
	return arr;
}


console.log("Input: ",arr);
console.log("Output: ",quickSort(arr));

