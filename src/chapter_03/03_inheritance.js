var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Passenger = (function () {
    function Passenger() {
    }
    return Passenger;
}());
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
var Ford = (function () {
    function Ford(wheels, company, capacity) {
        this.wheels = wheels;
        this.company = company;
        this.capacity = capacity;
    }
    Ford.prototype.start = function (name) {
        return null;
    };
    Ford.prototype.load = function (amount) {
    };
    return Ford;
}());
// compiles as all the property of Truck and its parent interface Car has been in it.
//class inheritancess..
var TruckAndBus = (function (_super) {
    __extends(TruckAndBus, _super);
    /*
    //this constructor does'nt have superclass's constructor call. so compile error because super class
    //won't be able to construct without those parameters. or superclass doesnt have an empty constructor.
    constructor (seats: number) {
    }
    */
    function TruckAndBus(seats) {
        _super.call(this, 12, "Ford", 1500);
        this.seats = seats;
    }
    TruckAndBus.prototype.takePassenger = function (passenger) {
        return false;
    };
    return TruckAndBus;
}(Ford));
//class property accessors.
var Human = (function () {
    function Human() {
    }
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value + 3;
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
var h = new Human();
h.age = 5;
console.log(h.age); //prints 8
