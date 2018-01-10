function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function () {
	console.log("This phone brand is " + this.brand + ", color is " + this.color + " and price is " + this.price + ".");
};

var samsungGalaxyS6 = new Phone("Samsung", 1000, "black");
var iPhone6S = new Phone("Apple", 2200, "white");
var onePlusOne = new Phone("OnePlus", 1500, "grey"); 

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();