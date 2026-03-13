// Complete the js code
class Car{
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return `${make} ${model}`;
	}
}
class SportsCar extends Car{
	constructor(make, model, topSpeed){
		super(make);
		super(model);
		this.topSpeed = topSpeed; 
	}
	getTopSpeed(){
		return `Top speed is ${topSpeed}`
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
