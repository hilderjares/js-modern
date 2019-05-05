const animal = {
	type: "Dog",
	displayType: function() {
		return this.type;
	},
	setType: function(type) {
		this.type = type;
	}
};

console.log(animal);
console.log(animal.displayType());
animal.setType("Cat");
console.log(animal.displayType());

const user = {
	name: "Hilder"
};

const permissions1 = { canView: true };
const permissions2 = { canEdit: true };

console.log(user);

Object.assign(user, permissions1, permissions2);

console.log(user);


const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

const keys = Object.keys(employees);

console.log(keys);
console.log(employees['sales']);