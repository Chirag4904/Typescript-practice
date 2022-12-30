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
