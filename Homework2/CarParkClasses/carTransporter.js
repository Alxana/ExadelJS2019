const Truck = require("./truck");

class CarTransporter extends Truck{

    constructor(regNum, maker, model, weight, maxCarsNum){
        super(regNum, maker, model, weight);
        this.maxCarsNum = maxCarsNum;
    }

    rent(renter, rentUntil, maxTruckWeight, carsNum){
        if (carsNum > this.maxCarsNum){
            console.error(`${this.maker} ${this.model} cannot take ${carsNum} cars to transport, maximum ${this.maxCarsNum} allowed`);
        } else {
            Truck.prototype.rent.call(this, renter, rentUntil, maxTruckWeight);
        }
    }

    toString() {
        return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}, maxCarsNumber: ${this.maxCarsNum}`;
    }

}

module.exports = CarTransporter;