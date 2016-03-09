var anyType = {
    id: 1,
    name: "Anik"
};
//works because of assigning anytype of variable.
anyType = {
    id: 1,
    name: "Anik",
    course: "TS"
};
anyType.grade = 5; // works
console.log(anyType);
anyType.name = 5; //works as well.
