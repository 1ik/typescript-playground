var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Closing"] = 2] = "Closing";
    DoorState[DoorState["Opening"] = 3] = "Opening";
})(DoorState || (DoorState = {}));
;
// let's defining the type for door
var door;
//let's defining a real door type objec
var frontDoor = {
    name: "Front Door",
    state: DoorState.Closed
};
door = frontDoor;
console.log("Front door status matched ", frontDoor.state == DoorState.Closing); // false
console.log("Front door status matched ", frontDoor.state == DoorState.Closed); // true
//also there are constant enums so the value cannot be changed.
console.log(DoorState[0]); // prints the value Open
//but for constatn enums value couldn't be printed like this.
//console.log(OrderStatus[0]); //A const enum member can only be accessed using a string literal. err
console.log(0 /* "Processed" */); //valid
