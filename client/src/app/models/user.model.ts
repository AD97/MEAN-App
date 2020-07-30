export class User {
	private name: String;
	private desc: String;
	private state: String;
	private age: Number;
	private ethnicity: String;
	private race: String;
	private sex: String;
	private height: Number;
	private weight: Number;

	constructor() {
		this.name = this.desc = this.state = this.ethnicity = this.race = this.sex = ''
		this.age = this.height = this.weight = 0;
	}

}