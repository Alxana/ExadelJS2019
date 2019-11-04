const Truck = require("./truck");

function Trailer(regNum, maker, model, weight, maxCargoWeight){
    Truck.call(this, regNum, maker, model, weight);

    this.maxCargoWeight = maxCargoWeight;
}

Trailer.prototype = Object.create(Truck.prototype);
Trailer.prototype.constructor = Trailer;

Trailer.prototype.rent = function (renter, rentUntil, maxTruckWeight, cargoWeight){
    if (cargoWeight > this.maxCargoWeight){
        console.error(`${this.maker} ${this.model} cannot take ${cargoWeight} tons of cargo`);
    } else {
        Truck.prototype.rent.call(this, renter, rentUntil, maxTruckWeight);
    }
}

Trailer.prototype.toString = function () {
    return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}, maxCargoWeight: ${this.maxCargoWeight}`;
}

module.exports = Trailer;