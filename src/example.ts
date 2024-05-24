//1
const typeStr: string = "Hello, World!";
console.log(typeStr);

const typeNumber: number = 5;
console.log(typeNumber);


const typeBoolean: boolean = true;
console.log(typeBoolean);


const typeNull: null = null;
console.log(typeNull);


const typeUndefined: undefined = undefined;
console.log(typeUndefined);


const typeObject: { name: string, age: number } = {name: "Alice", age: 30 };
console.log(typeObject);


let typeAny: any = "any text";
console.log(typeAny);
typeAny = 25;
console.log(typeAny);

function someFunc(message: string): void {
    console.log(message);
}
someFunc("Some text");

function error(message: string): never {
    throw new Error(message);
}

const typeUnknown: unknown = "Typescript";
if (typeof typeUnknown === "string") {
    console.log(typeUnknown.toUpperCase());
}


//2

interface Person {
    name: string;
    age: number;
    hobbies: string[];
}

const person: Person = {
    name: "Oleg",
    age: 23,
    hobbies: ["reading", "swimming", "running"]
};

console.log(person);

//3

const sum = (a: number, b: number): number => {
    return a + b;
};

console.log(sum(5, 4));

//4

enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today: DaysOfWeek = DaysOfWeek.Monday;
console.log(today);