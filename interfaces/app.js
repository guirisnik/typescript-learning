"use strict";
exports.__esModule = true;
var hello = function (person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};
var user = { firstName: "Foo", lastName: "Bar" };
console.log(hello(user));
