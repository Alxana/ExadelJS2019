const Vehicle = require("./vehicle");

function Truck(regNum, maker, model, weight){
    Vehicle.call(this, regNum, maker, model);

    this.weight = weight;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.checkWeight = function (maxTruckWeight) {
    let isOk = true;
    if (this.weight > maxTruckWeight) {
        console.error(`${this.maker} ${this.model} exceeds max weight for this trip.
        It must not exceed ${maxTruckWeight} tons`);
        isOk = false;
    }
    return isOk;
};

Truck.prototype.rent = function (renter, rentUntil, maxTruckWeight){
    if (this.checkWeight(maxTruckWeight)){
        Vehicle.prototype.rent.call(this, renter, rentUntil);
    }
}

Truck.prototype.toString = function () {
    return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}`;
}

module.exports = Truck;