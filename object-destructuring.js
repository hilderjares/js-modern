const person = {
	name: "maria",
	age: 23,
	rule: "admin"
};

const {name, age, rule} = person;

console.log(`
	Nome: ${name}
	Idade: ${age}
	Papel: ${rule}
`);

const student = {
    name: 'Hilderjares',
    age: 23,
    scores: {
        maths: 74,
        english: 63
    }
};

const { name: nameStudant , scores: {maths, computing = 60} } = student;

console.log(nameStudant);
console.log(maths);

const printStudant = ({name: nameStudant , scores: {maths, computing = 60}}) => {
	console.log(`I'm ${nameStudant} and my computing socore is ${computing}`);
};

printStudant(student);