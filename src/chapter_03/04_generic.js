var BattleField = (function () {
    function BattleField() {
    }
    BattleField.prototype.play = function () {
        console.log("I am playing BF4");
    };
    return BattleField;
}());
var GameManager = (function () {
    function GameManager() {
    }
    GameManager.prototype.manage = function (arg) {
        arg.play();
    };
    return GameManager;
}());
var gm = new GameManager();
gm.manage(new BattleField()); // so this will print "I am playing BF4"
//creating a new object withing generic.
var FirstClass = (function () {
    function FirstClass() {
    }
    return FirstClass;
}());
var SecondClass = (function () {
    function SecondClass() {
    }
    return SecondClass;
}());
var GenericCreator = (function () {
    function GenericCreator() {
    }
    GenericCreator.prototype.create = function (arg) {
        return new arg();
    };
    return GenericCreator;
}());
var creator1 = new GenericCreator();
creator1.create(FirstClass);
