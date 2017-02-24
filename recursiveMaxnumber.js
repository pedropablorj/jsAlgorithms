//Max Number
var arr  = [1,3,4,5,3,500,9,4,2,7,5,4,8,10,1500,1,3,4,5,3,500,9,4,2,7,5,4,8,10,1200,2000];

function maxNumber(arr){
	
	//Base and error cases	
	switch(arr.length){
		case 0:
			console.log("error");
			return;
		case 1:
			return arr[0];
		case 2:
			return compair(arr[0], arr[1]);
		default:
			break;
	}
	
	//Recursion
	return compair(maxNumber(arr.slice(0,Math.floor(arr.length/2))), maxNumber(arr.slice(Math.floor(arr.length/2), arr.length)));
}

//Compair
function compair(a, b){
	return (a > b) ? a : b;
}

console.log(maxNumber(arr));
