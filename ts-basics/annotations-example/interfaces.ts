// using object annotation which can become unreadable if properties are more and is not reusable
const oldCivic = {
	name: "civic",
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// using interface

interface Coords {
	x: number;
	y: number;
}

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	loc: Coords;
	summary(): string;
}
const newCivic = {
	name: "civic",
	year: 2000,
	broken: true,
	loc: {
		x: 0,
		y: 0,
	},
	summary() {
		return `Name: ${this.name}`;
	},
};

const newPrint = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

newPrint(newCivic);
