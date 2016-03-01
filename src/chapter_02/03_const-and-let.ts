const a = 5;
const b : number = 5;
const c  = "best";

const d = {
	one: 1,
	two: 2
};

d.one = 3;
console.log (d); //works fine

//d = {} // should be error because it is a constant.
//console.log (d);


/*======
|	Usage of let. Scoping test of let.
======*/

const ifelse : boolean = true
/*
if(ifelse) {
	let z = "True";
} else {
	let z = "False";
}
console.log (z); //should be error as z has not been scopped outside of if/else.
*/
let z = "Not assigned";
if(ifelse) {
	let z = "True";
} else {
	let z = "False";
}
console.log(z); //works fine as it is assigned outside but it is not been assigned because inside if/else a new z has been initialized.


let z = "Not assigned";
if(ifelse) {
	z = "True";
} else {
	z = "False";
}
console.log(z); //works and value changes.


