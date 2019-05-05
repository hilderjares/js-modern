const animals = [
	{name: "Vivi", type: "cat"},
	{name: "Rex", type: "dog"},
	{name: "Joy", type: "dog"},
	{name: "Miau", type: "cat"},
	{name: "Lulu", type: "cat"},
	{name: "Doug", type: "dog"},
	{name: "Urano", type: "dog"},
	{name: "Vivi", type: "cat"},
];

/*
const cats = animals.filter(function(animal) {
	return animal.type === "cat";
}); 
*/

const cats = animals.filter((animal) => animal.type === "cat"); 
const catsNameVivi = cats.filter((cat) => cat.name === "Vivi");

console.log(animals);
console.log(cats);
console.log(catsNameVivi);