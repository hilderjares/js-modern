const scores = [23, 43, 54, 4];
const newScores = [22, 43, ...scores];

console.log(scores);
console.log(newScores);

const values = [23, 7];

function sum(a , b) { 
	return a + b
};

console.log(sum(2, 4)); 
console.log(sum(...values)); 

function printScore(...scores) {
	scores.forEach(score => console.log(score));
}

printScore(23, 54, 64, 76, 45);