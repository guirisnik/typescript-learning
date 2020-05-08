/* Compile with tsc intro.ts */

// 1. Intro
let hello = (name: string): string => `Hello, ${name}`;

const user1 = "Foo";
document.body.textContent = hello(user1);

/*
 * This example would throw an error because
 * user 2 is not a string.
 */
// const user2 = [1, 2, 3];
// document.body.textContent = hello(user2);
