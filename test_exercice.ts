import { uniq } from 'lodash';
console.log(uniq([1,2,3,4,4,5,6]));

// ------------ //

let firstName: string = null;
console.log(firstName);
console.log(typeof firstName)

// ------------ //

let employeeInfo: [string, string, number?] = ['Test', 'Test bis'];
employeeInfo = ['Test', 'Test bis', 42];
console.log(employeeInfo[2])

// ------------ //
let person: {lastName: string, firstName: string, age?: number} = {lastName: 'Test', firstName: 'John', age: undefined};
console.log(person)
person.age= 40;
console.log(person)

// ------------ // affiche une erreur
// let name: any = "Prénom";
// name.toExponential()

// ------------ //
const [name1, name2] = ["Test", "TestBis"];
console.log(name1)
console.log(name2)

// ------------ //

function throwError(){
    throw new Error("I'm evaluate")
}

if(true || throwError()) {
    console.log('Je passe ici')
}

if(false && throwError()) {
    console.log('Je passe ici')
}

// ------------ //

for(let toto in person) {
    console.log(person[toto])
}