var Bus = (function () {
    function Bus(wheels, company) {
        this.wheels = wheels;
        this.company = company;
    }
    Bus.prototype.speed = function () {
        if (this.company == "Ford") {
            return 100 * this.wheels;
        }
        else {
            return 30 * this.wheels;
        }
    };
    return Bus;
}());
/*
// Class 'Truck' incorrectly implements interface 'Car' Error
class Truck implements Car {
    wheels: number;
}
*/
var ford = new Bus(4, "Ford");
console.log(ford.speed());
var merc = new Bus(4, 3322);
console.log(merc.speed());
