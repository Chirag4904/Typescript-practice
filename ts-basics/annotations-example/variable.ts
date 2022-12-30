const apples: number = 5;

//  : number  is the type annotation

let speed: string = "slow";
let isGood: boolean = true;

let nothing: undefined = undefined;

// Built in objects
let d: Date = new Date();

//arrays
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//classes
class Vehicle {}

let v: Vehicle = new Vehicle();

//object literal
let point: { x: number; y: number } = { x: 1, y: 2 };

//function
// const logNumber = (i)=>{
//     console.log(i);
// }

//                input type   output type
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

//when to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords); //{ x: 10, y: 20 }

// 2) When we declare a variable on one line and initialize it later
let colours = ["red", "green", "blue"];
let found: boolean;

for (let i = 0; i < colours.length; i++) {
	if (colours[i] === "green") {
		found = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let nums = [-10, -1, 12];
// let numAboveZero = false; //if number is above 0 then assign it to this variable and if no number is above 0 then assign false to this variable
let numAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
	if (nums[i] > 0) {
		numAboveZero = nums[i];
	}
}
