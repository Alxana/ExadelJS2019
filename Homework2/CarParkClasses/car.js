const Vehicle = require("./vehicle");

class Car extends Vehicle{
    constructor(regNum, maker, model, maxPassengers){
        super(regNum, maker, model);
        this.maxPassengers = maxPassengers;
    }


    checkPassengersNum(passengersNum) {
        let isOk = true;
        if (passengersNum > this.maxPassengers) {
            console.error(`${this.maker} ${this.model} can't take ${passengersNum} passengers. Max number of passengers is ${this.maxPassengers}`);
            isOk = false;
        }
        return isOk;
    }

    rent(renter, rentUntil, passengersNum){
        if (this.checkPassengersNum(passengersNum)){
            Vehicle.prototype.rent.call(this, renter, rentUntil);
        }
    }

    toString() {
        return `maker:${this.maker}, model:${this.model}, maxNumOfPassengers: ${this.maxPassengers}`;
    }
}

module.exports = Car;