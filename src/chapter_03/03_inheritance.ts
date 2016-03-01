//interface inheritance..
interface Car {
	wheels: number;
	company: string;
	start(name: string): string;
}

class Passenger  {}

interface Truck extends Car {
	capacity: number; //capacity to carry weight.
	load(amount:number): void; //loads goods into track.
}

interface Bus extends Car {
	seats: number; //the number of seats
	takePassenger(passenger: Passenger): boolean;
}



// class inheritances..

/*
//wont compile because the parent interface's function start isn't there so it's not a proper implementation.
class Ford implements Truck {
	wheels: number;
	company: string;
	capacity: number;

	load(amount:number) : void {

	}
}
*/

class Ford implements Truck {
	wheels: number;
	company: string;
	capacity: number;

	constructor(wheels: number, company: string, capacity: number) {
		this.wheels = wheels;
		this.company = company;
		this.capacity = capacity;
	}
	
	start(name: string): string {
		return null;
	}

	load(amount: number): void {

	}
}
// compiles as all the property of Truck and its parent interface Car has been in it.



//class inheritancess..
class TruckAndBus extends Ford implements Bus {
	seats: number;
	private regId: string;
	/*
	//this constructor does'nt have superclass's constructor call. so compile error because super class
	//won't be able to construct without those parameters. or superclass doesnt have an empty constructor.
	constructor (seats: number) {		
	}
	*/

	constructor(seats: number) {
		super(12, "Ford", 1500);
		this.seats = seats;
	}

	takePassenger(passenger: Passenger): boolean {
		return false;
	}
}


//class property accessors.
class Human {
	private _age: number;

	get age() {
		return this._age;
	}

	set age(value: number) {
		this._age = value + 3;
	}
}

let h = new Human();
h.age = 5;
console.log(h.age); //prints 8

