const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

//WRONG WAY
// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';

const pepsi: [string, boolean, number] = ["brown", true, 40]; //now the order matters
// pepsi[0] = 40; // error
// pepsi[2] = 'brown'; // error
