// 2. Interfaces
import { Person } from "./Person";

const hello = (person: Person): string =>
    `Hello, ${person.firstName} ${person.lastName}`;

const user = { firstName: "Foo", lastName: "Bar"};

console.log(hello(user));
