class Vehicle {
	constructor() {
		console.log("creating vehicle");
	}

	drive(): void {
		console.log("driving");
	}

	honk(): void {
		console.log("honk");
	}
}

class Car extends Vehicle {
	constructor() {
		super();
		console.log("creating car");
	}
}

const vehicle = new Vehicle();
vehicle.drive();

const car = new Car();
car.drive();
