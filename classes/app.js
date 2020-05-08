"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var hello = function (person) {
    return "Hello " + person.firstName + " " + person.lastName;
};
var user = new Student_1.Student("Jane", "F.", "Doe");
console.log(hello(user));
