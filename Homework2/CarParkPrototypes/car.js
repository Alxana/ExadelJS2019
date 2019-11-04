const Vehicle = require("./vehicle");

function Car(regNum, maker, model, maxPassengers){
    Vehicle.call(this, regNum, maker, model);

    this.maxPassengers = maxPassengers;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.checkPassengersNum = function (passengersNum) {
    let isOk = true;
    if (passengersNum > this.maxPassengers) {
        console.error(`${this.maker} ${this.model} can't take ${passengersNum} passengers. Max number of passengers is ${this.maxPassengers}`);
        isOk = false;
    }
    return isOk;
};

Car.prototype.rent = function (renter, rentUntil, passengersNum){
    if (this.checkPassengersNum(passengersNum)){
        Vehicle.prototype.rent.call(this, renter, rentUntil);
    }
}

Car.prototype.toString = function () {
    return `maker:${this.maker}, model:${this.model}, maxNumOfPassengers: ${this.maxPassengers}`;
}

module.exports = Car;