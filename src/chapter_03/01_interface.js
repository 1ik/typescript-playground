//interface is also known as custom type for object.
var bus = {
    wheels: 4,
    company: "Scania"
};
//compiles fine.
var truck = {
    wheels: 4,
    company: "Ford",
    horns: true //wont compile as the interface Car doesnt have this property
};
