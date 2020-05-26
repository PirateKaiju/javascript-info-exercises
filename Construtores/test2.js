C = {};
function A() {
	return C; 
}

function B() {

	return C; 
}

let a = new A;
let b = new B;

alert( a == b ); // true
//alert(true);