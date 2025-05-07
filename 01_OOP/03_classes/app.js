// class Triangle {
// 	getArea() {
// 		return (this.a * this.b) / 2;
// 	}
// 	getHypotenuse() {
// 		return Math.sqrt(this.a ** 2 + this.b ** 2);
// 	}
// 	sayHi() {
// 		return 'HELLO FROM A TRIANGLE!!';
// 	}
// }

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;

// const secondTri = new Triangle();
// secondTri.a = 5;
// secondTri.b = 12;

class Triangle {
	constructor(sideA, sideB) {
		if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);
		if (!Number.isFinite(a) || b <= 0) throw new Error(`Invalid b: ${b}`);
		this.a = sideA;
		this.b = sideB;
	}
	getArea() {
		return (this.a * this.b) / 2;
	}
	getHypotenuse() {
		return Math.sqrt(this.a ** 2 + this.b ** 2);
	}
	sayHi() {
		return 'HELLO FROM A TRIANGLE!!';
	}
}

const tri = new Triangle(5, 12);
const tri2 = new Triangle(2, 4);
