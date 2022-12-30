const add = (a: number, b: number): number => {
	return a + b;
};
//for arguments of a function we dont get type inference support but for the output we do get type inference but we won't use it

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};
console.log(multiply(2, 3));

const throWError = (message: string): never => {
	throw new Error(message);
};

const todaysWeather = {
	date: new Date(),
	weather: "sunny",
};

// const logWeather = (forecast : {date: Date, weather: string}): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }
const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};
