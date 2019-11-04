const Vehicle = require("./vehicle");

class Truck extends Vehicle{

    constructor(regNum, maker, model, weight){
        super(regNum, maker, model);
        this.weight = weight;
    }

    checkWeight(maxTruckWeight) {
        let isOk = true;
        if (this.weight > maxTruckWeight) {
            console.error(`${this.maker} ${this.model} exceeds max weight for this trip.
        It must not exceed ${maxTruckWeight} tons`);
            isOk = false;
        }
        return isOk;
    };

    rent(renter, rentUntil, maxTruckWeight){
        if (this.checkWeight(maxTruckWeight)){
            Vehicle.prototype.rent.call(this, renter, rentUntil);
        }
    }

    toString = function () {
        return `maker:${this.maker}, model:${this.model}, weight: ${this.weight}`;
    }
}

module.exports = Truck;