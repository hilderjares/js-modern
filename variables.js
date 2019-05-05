var name = "hilderjares";
name = "francisco";

let idade = 12;
/* 
 *let idade = 13; # Identifier 'idade' has already been declared
 */

const cpf = "90240.423432-432";
/*
 * const cpf = "32434.544554-213"; # Identifier 'cpf' has already been declared
 */

function mudarName() {
	name = "lucas";
}

function mudarIdade() {
	idade = 14;
}

function mudarCpf() {
	cpf = "32434.544554-213";
}

mudarIdade();
mudarName();
/*
 * mudarCpf(); # Assignment to constant variable
 */


const person = {
	name: "rafael",
	idade: 23,
	cpf: "2432432423434"
};

console.log(name);   // result -> lucas
console.log(idade);  // result -> 14
console.log(cpf);    // result -> 90240.423432-432
console.log(person); // result -> { name: 'rafael', idade: 23, cpf: '2432432423434' }

person.idade = 30;

console.log(person); // result -> { name: 'rafael', idade: 30, cpf: '2432432423434' }

for (var i = 0; i < 5; i++) {
	// code...
}

for (let j = 0; j < 5; j++) {
	// code...
}

console.log(i); // result -> 5
/*
  console.log(j); result -> j is not defined
*/

/*
Assignment to constant variable. Erro returned because y is a constant

for (const y = 0; y < 5; y++) { 
	
}
*/ 

