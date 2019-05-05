const values = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(values.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(values.reduce(reducer, 5));
// expected output: 15


const player = {
	nickname: "Kina",
	scores: [
		{ action: "hit on swanp", socre: 30 },
		{ action: "jamp rock", socre: 10 },
		{ action: "complete mission", socre: 100 },
	]
};


const totalSocore = player.scores.reduce((accumulator, item, key, old) => {
	console.log("Score: ", accumulator);
	console.log("---------");
	console.log(item);
	console.log(key);
	console.log("---------");
	return accumulator + item.socre;
}, 0);

console.log("Total Score: ", totalSocore);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);