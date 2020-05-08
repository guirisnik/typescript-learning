import { Student } from "./Student";
import { Person } from "./Person";

const hello = (person: Person): string =>
  `Hello ${person.firstName} ${person.lastName}`;

const user = new Student("Jane", "F.", "Doe");

console.log(hello(user));
