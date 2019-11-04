const Truck = require("./truck");

function CarTransporter(regNum, maker, model, weight, maxCarsNum){
    Truck.call(this, regNum, maker, model, weight);

    this.maxCarsNum = maxCarsNum;
}

CarTransporter.prototype = Object.create(Truck.prototype);
CarTransporter.prototype.constructor = CarTransporter;

// Check if number of cars to transport is inside limits
CarTransporter.prototype.rent = function (renter, rentUntil, maxTruckWeight, carsNum){
    if (carsNum > this.maxCarsNum){
        console.error(`${this.maker} ${this.model} cannot take ${carsNum} cars to transport, maximum ${this.maxCarsNum} allowed`);
    } else {
        Truck.prototype.rent.call(this, renter, rentUntil, maxTruckWeight);
    }
}

CarTransporter.prototype.toString = function () {
    return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}, maxCarsNumber: ${this.maxCarsNum}`;
}

module.exports = CarTransporter;