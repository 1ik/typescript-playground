enum DoorState {
	Open,
	Closed,
	Closing,
	Opening
};

// let's defining the type for door
let door : {
	name? : string,
	state?: DoorState
}

//let's defining a real door type objec
let frontDoor = {
	name: "Front Door",
	state: DoorState.Closed
};

door = frontDoor; 

console.log("Front door status matched " , frontDoor.state == DoorState.Closing) // false
console.log("Front door status matched ", frontDoor.state == DoorState.Closed); // true

//also there are constant enums so the value cannot be changed.

console.log(DoorState[0]); // prints the value Open

const enum OrderStatus {
	Processed,
	Processing
}

//but for constatn enums value couldn't be printed like this.
//console.log(OrderStatus[0]); //A const enum member can only be accessed using a string literal. err
console.log(OrderStatus["Processed"]); //valid
