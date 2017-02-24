var str = "qwertyuiopasdfghjkl";

function reverse(str){
	var arrStr = (typeof str === "string") ? str.split('') : str;	
	var c = arrStr.shift();
	if(arrStr.length === 0){
		return c;
	}
	
	return reverse(arrStr) + c;
}

//Input
console.log(str);
//Output
console.log(reverse(str));
