var message = {
    id: 2,
    body: "This is a message"
};
// is currect because id and body property is available.
message = {
    id: 4,
    body: "This is body 2"
};
/*
//isn't corrrect because body was string while initializing and now 3 provided which is int type.
message = {
    id : 4,
    body : 3
};
*/
/*
//isn't correct because the original message had body in it but now it has the property misssing or renamed.
message = {
    id: 3,
    msg: "This is message"
}
*/
//in the mastering typescript book, it's said that this wont' generate any error message as they think that
// all the propertiess are available in the object but that isn't the case. It strictly expect those 2 prperteis name and id
// without those it will always give compile errors. and also the type of those properties has to be matched exactly.
/*
let complexType = { name: "myName", id: 1 };
complexType = { name: "name", id: 2, address: "address" };
*/
// But we can prepare a system to allow other properties without assigning like below.
var student;
var student2 = { name: "Anik", username: "21k" };
student = student2;
console.log(student);
