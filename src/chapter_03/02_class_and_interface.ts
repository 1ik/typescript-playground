interface Car {
	wheels: number;
	company: string;
	speed(): number;
}



class Bus implements Car {
	wheels: number;
	company: any;
	
	constructor(wheels: number, company: any) {
		this.wheels = wheels;
		this.company = company;
	}

	speed(): number {
		if(this.company == "Ford") {
			return 100 * this.wheels;
		} else {
			return 30 * this.wheels;
		}
	}
}

let ford = new Bus(4, "Ford");
console.log(ford.speed());
let merc = new Bus(4, 3322);
console.log(merc.speed());



/*
// Class 'Truck' incorrectly implements interface 'Car' Error
class Truck implements Car {
	wheels: number;
}
*/



