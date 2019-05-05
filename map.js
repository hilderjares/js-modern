const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const getFullName = (item) => {
	fullName = [item.firstname,item.lastname].join(" ");
	return fullName;
};

const fullNames = persons.map(getFullName);

console.log(fullNames);

const studants = [
	{name: "Luna", grade: 23},
	{name: "Rafa", grade: 67},
	{name: "Isa", grade: 32}
];

/*
	const studantGrades = [];

	studants.forEach( function(studant) {
		studantGrades.push(studant.grade);
	});
*/

/*
	const studantGrades = studants.map(function (studant) {
		return studant.grade
	});
*/

const studantGrades = studants.map((studant) => studant.grade);

console.log(studants);
console.log(studantGrades);
