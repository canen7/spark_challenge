function calculator(string){
	if (isValidString(string)){
		console.log('hi');
	} else {
		return "bad input"
	}	
}

function calculate(string){
	var input = string; 
	for (var i = 1; i < input.length - 2; i++){
		//check for multiplications and modify string
		if (input[i] == '*') {
			operations.multiply(input,i)
		}
		//check for divisions

		//check for addition

		//check for substraction
	}
}

operations = {
	pos:'',
	mult:'',
	result:'',
	multiply: function(string, operatorPosition){
		var temp='';
		for (var i = 0; i<operatorPosition - 1;i++){
			temp+=string[i];
		}
		temp += string[operatorPosition - 1 ] * string[operatorPosition + 1 ]; 
		for (var i = operatorPosition + 2; i<string.length; i++){
			temp+= string[i];
		}
		console.log('temp; ', temp);
		return temp;
	},
	divide: function(string, operatorPosition){
		var temp='';
		for (var i = 0; i<operatorPosition - 1;i++){
			temp+=string[i];
		}
		temp += string[operatorPosition - 1 ] / string[operatorPosition + 1 ]; 
		for (var i = operatorPosition + 2; i<string.length; i++){
			temp+= string[i];
		}
		console.log('temp; ', temp);
		return temp;

	},
	sum: function(){

	},
	substract: function(){

	}
}
console.log(operations.divide('8+3*20/5',5))


//functions to check if input is a non empty string
function isString(input){
	if (input.length == 0) {return false}
	return (typeof(input) == 'string');
}
//function to check if first character is number
function isNumber(char){
	return (!isNaN(char));	
}
//function to check if first character is a Number
function isFirstCharNumber(string){
	return isNumber(string[0]);
}
function isEven(number){
	if (number%2 == 0){ 
		return true 
	} else { 
		return false
	}
}
function isOperator(char){
	var isOperator = false;
	if (char == '*' || char == '/' || char =='+' || char == '-') {
		isOperator = true;
	}
	return isOperator;
}

//function to check if is a valid string
// to be valid the first char is number
// to be valid no two operators adjacent
// function isValidString(string){
// 	var isValidString = true;
// 	if ( isFirstCharNumber(string) ){
// 		for (var i = 1; i < string.length; i++) {
// 			if ( isEven(i) ) {
// 				if ( !isNumber(string[i]) ){
// 					isValidString = false;
// 				}
// 			} else {
// 				if ( !isOperator(string[i]) ){
// 					isValidString = false;
// 				}
// 			}
// 		} 
// 	} else {
// 		isValidString = false;
// 	}
// 	return isValidString
// }

function isValidString(string){
	var isValidString = true;
	if ( isFirstCharNumber(string) ){
		var i = 1
		while (i < string.length) {
			if (isOperator(string[i]) && isOperator(string[i+1]) ) {
				isValidString = false
			}				
			i++;
		}
	}
	return isValidString;

}

console.log('isValidString');
console.log(isValidString('3*2/6%a'));

//test
// console.log('operations');
// console.log(operations.multiply('3*3+8*6'));


//test isString
// console.log('isString');
// console.log(isString("hello"));
// console.log(isString(72));
// console.log(isString(true));
// console.log(isString(true));
// console.log(isString('1*3+2'));
// console.log(isString(''));

// //test, given that input is string if first element is number
// console.log('isFirstCharNumber')
// console.log(isFirstCharNumber('3+2*8'));
// console.log(isFirstCharNumber('/3+2*8'));
// console.log(isFirstCharNumber('true'));
// console.log(isFirstCharNumber(false));

// ///
// console.log('isNaN');
// console.log(isNaN('a'));
// console.log(isNaN('7'));
// console.log(isNaN('true'));
// console.log(isNaN('false'));
// console.log(isNaN(true));
// console.log(isNaN(false));

// //
// console.log('isOperator');
// console.log(isOperator('/'));
// console.log(isOperator('+'));
// console.log(isOperator('7'));
// console.log(isOperator(''));

// ///
// console.log('isValidString');
// console.log(isValidString('3+2*5/7'))
// console.log(isValidString('/+2*5/7'))
// console.log(isValidString(''))
