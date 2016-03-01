//define a function that takes two number and returns a number. Returns the sum of two numbers.
function getSum(a, b) {
    return a + b;
}
var res = getSum(2, 3);
//var res = getSum("2", "3"); //err
//optional
var concat = function (a, b, c) {
    return a + b + c;
};
var str = concat("i", "am", "programmer"); //works
var str = concat("i", "am"); //works because third one is optional
//var str = concat("i"); // doesnt work because 2nd param is mandatory
//taking argumens..
function takeArgs() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i - 0] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
            console.log("arguments " + i + " = " + arguments[i]);
        }
    }
}
takeArgs(1, 3, 4, 5);
// takeArgs("one", "two"); //gives error because arguments should only be numbers.
//callbacks
var callbackReturnsNumber = function (text) {
    console.log(text);
    return 221;
};
var callbackReturnsNothing = function (text) {
    console.log(text);
};
var operate = function (text, callback) {
    console.log("hey i got it " + text);
    console.log("the number is ", callback(text));
};
operate(" Hey this is a string", callbackReturnsNumber); //works
operate(" Hey this is a string", callbackReturnsNothing); // wont' work because the strongly typed check on callback will throw compiler error.
