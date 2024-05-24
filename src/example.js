//1
var typeStr = "Hello, World!";
console.log(typeStr);
var typeNumber = 5;
console.log(typeNumber);
var typeBoolean = true;
console.log(typeBoolean);
var typeNull = null;
console.log(typeNull);
var typeUndefined = undefined;
console.log(typeUndefined);
var typeObject = { name: "Alice", age: 30 };
console.log(typeObject);
var typeAny = "any text";
console.log(typeAny);
typeAny = 25;
console.log(typeAny);
function someFunc(message) {
    console.log(message);
}
someFunc("Some text");
function error(message) {
    throw new Error(message);
}
var typeUnknown = "Typescript";
if (typeof typeUnknown === "string") {
    console.log(typeUnknown.toUpperCase());
}
var person = {
    name: "Oleg",
    age: 23,
    hobbies: ["reading", "swimming", "running"]
};
console.log(person);
//3
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 4));
//4
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
var today = DaysOfWeek.Monday;
console.log(today);
