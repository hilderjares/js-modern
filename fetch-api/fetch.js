const fetch = require('node-fetch');
const url = 'https://jsonplaceholder.typicode.com/users';



function listUsers(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch(error => console.error(error));
}


function createUser(url) {
	const headers = { "Content-Type": "application/json; charset=utf-8" };
	const user = JSON.stringify({
		username: 'Elon Musk',
	    email: 'elonmusk@gmail.com',
	});

	fetch(url, {
	  headers: headers,
	  method: 'POST',
	  body: user
	})
	.then((response) => response.json())
  	.then((data) => console.log(data))
  	.catch(error => console.error(error));
}

listUsers(url);
createUser(url);
