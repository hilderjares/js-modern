function getAge () {
	return 13;
}

const getName = function() {
	return 'maria';
};

const getCpf = () => {
	return '325325.325325.4';
};

const getStatus = () => 1;

const printColor = (color) => console.log(color);
const printColorWithoutParentheses = color => console.log(color);

const getPerson = () => ({name: "francisco", age: 23});


console.log(getAge());
console.log(getName());
console.log(getCpf());
console.log(getStatus());

printColor("azul");
printColorWithoutParentheses("vermelho");

console.log(getPerson());