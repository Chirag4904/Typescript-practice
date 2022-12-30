const car = ["ford", "toyota", "chevy"];
const cars = [["ford", "toyota", "chevy"], ["f150"], ["corolla"]];
const c: string[][] = [];

//Help with inference when extracting values
const tempcar = car[2];

//Prevent from adding incompatible values to array
// car.push(100); //ERROR Argument of type 'number' is not assignable to parameter of type 'string'

//Help with 'map', 'forEach', 'reduce' functions
car.map((c: string): string => {
	return c.toUpperCase();
});

//Flexible type arrays
const impDates: (string | Date)[] = [new Date()];
impDates.push("2030-10-10");
