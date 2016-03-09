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
console.log(student); // prints { name: 'Anik', username: '21k' }
//so we saw that we are first assigning the type of the object and its properties also making the commits property
//optional by placing a ? mark just after it.
//Then we make an object with all the properties except the commits on and assign it to student it just takes because
// that satisfied all its types and commits was optional. 
