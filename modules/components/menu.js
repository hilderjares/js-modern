class Menu {

	constructor() {
		this.className = "default"
	}

	set menuClass(className) {
		this.className = className;
	}

	get menuClass() {
		return this.className;
	}

	renderMenu() {
		return (`
			<ul class="${this.className}">
				<li> Home </li>
				<li> About </li>
			</ul>
		`);
	}
}

const menu = new Menu();

module.exports = {menu};