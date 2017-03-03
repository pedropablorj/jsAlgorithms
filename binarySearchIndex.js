//Variation of binarySearch returning the index of the term found at the main array

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,50];
var searchTerm = 10; 

function binarySearch(arr, searchTerm, upIndex, downIndex){
        upIndex = (typeof(upIndex) === "undefined") ? arr.length-1 :  upIndex;
        downIndex = (typeof(downIndex) === "undefined") ? 0 : downIndex;

        if(upIndex < downIndex){
                return -1;
        }

        var pivot  = (upIndex === downIndex) ? upIndex : (upIndex - (Math.floor((upIndex-downIndex)/2)));
        
        if(arr[pivot] === searchTerm){
                return pivot;
        }
        
        if(arr[pivot] > searchTerm ){ 
                return binarySearch(arr, searchTerm, --pivot, downIndex);
        }else{
                return binarySearch(arr, searchTerm, upIndex, ++pivot);       
        }
}

console.log(binarySearch(arr, searchTerm));

