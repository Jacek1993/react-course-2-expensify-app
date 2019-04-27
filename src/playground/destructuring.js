//object destructuring

const person={
    name: 'Andrew',
    age: 26,
    location:{
        city: 'Philadelphia',
        temp: 92
    }
};

const {name:firstName='Anonymous', age}=person;                                     //firstName='Anynonymous' to jest wartosc domyslna
const {city, temp: temperature}=person.location;                                //temp: temperature to jest renaming
// const name=person.name;
// const age=person.age;

console.log(`${name} is ${age}`);
if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}


const book={
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const {name: publisherName='self-published'}=book.publisher;
console.log(publisherName);     // penguin or defaul self-publish

//array destructuring

const address=['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city1,state='New York']=address;


console.log(`You are in ${city1}  ${state}`);

const item=['Coffee (hot)', '$2.00', '$2.5', '$2.75'];

const [coffe, prize1, prize2]=item;

console.log(`A medium ${coffe} ${prize1} ${prize2}`);