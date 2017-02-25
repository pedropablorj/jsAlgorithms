var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,50];
var searchTerm = 31;

function binarySearch (arr, searchTerm){ 
	var pivotIndex;

	if(arr.length <= 1 && arr[0] !== searchTerm){
		return false;
	}
	
	pivotIndex = Math.floor(arr.length/2);
	
	if(arr[pivotIndex] === searchTerm || arr[pivotIndex-1] === searchTerm){
		return true;
	}else if(arr[pivotIndex] < searchTerm){
		return binarySearch(arr.slice(pivotIndex, arr.length), searchTerm);
	}else{
		return binarySearch(arr.slice(0, pivotIndex), searchTerm);
	}
}

console.log(binarySearch(arr, searchTerm));
