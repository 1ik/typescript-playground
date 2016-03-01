//interface is also known as custom type for object.


//we define a type/interface for a car type object so that every car type object must have these two properties.
interface Car {
	wheels: number;
	company: string;
}


var bus: Car = {
	wheels: 4,
	company: "Scania"
};
//compiles fine.


/*
var truck: Car = {
	wheels: 4,
	company: "Ford",
	horns : true //wont compile as the interface Car doesnt have this property
};
*/