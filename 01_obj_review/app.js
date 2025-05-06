const key = 'species';
const pet = { species: 'Dog', name: 'Elton', ae: 1.5 };

pet[true] = 'hello';

pet.bark = function () {
	return 'WOOF WOOF!!!';
};
