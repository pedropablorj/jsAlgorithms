var arr = [1,0,9,7,9,87,54,2,7,8,432,664,3,2,6879,3,236,790];

function sort(arr){
	if(arr.length <= 1){
		return arr;
	}
	
	return merge(sort(arr.slice(0,Math.floor(arr.length/2))), sort(arr.slice(Math.floor(arr.length/2), arr.length)));
}

function merge(arrOne, arrTwo){
	var newArr = [];
	
	if(arrOne.length === 0){
		return arrTwo;
	}else if(arrTwo.length === 0){
		return arrOne;
	}else{
		while(arrOne.length > 0 && arrTwo.length > 0){
			if(arrOne[0] < arrTwo[0]){
				newArr.push(arrOne.shift());

			}else if(arrOne[0] > arrTwo[0]){
				newArr.push(arrTwo.shift());	

			}else{
				newArr.push(arrOne.shift());
				newArr.push(arrTwo.shift());
				
			}
		}

		return  newArr.concat(arrOne, arrTwo);
	}
}

//Input
console.log(arr);
//Output
console.log(sort(arr));

