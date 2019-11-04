const Truck = require("./truck");

class Trailer extends Truck{

    constructor(regNum, maker, model, weight, maxCargoWeight){
        super(regNum, maker, model, weight);
        this.maxCargoWeight = maxCargoWeight;
    }

    rent(renter, rentUntil, maxTruckWeight, cargoWeight){
        if (cargoWeight > this.maxCargoWeight){
            console.error(`${this.maker} ${this.model} cannot take ${cargoWeight} tons of cargo`);
        } else {
            Truck.prototype.rent.call(this, renter, rentUntil, maxTruckWeight);
        }
    }

    toString() {
        return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}, maxCargoWeight: ${this.maxCargoWeight}`;
    }
}

module.exports = Trailer;