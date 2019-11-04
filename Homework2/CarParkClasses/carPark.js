const Car = require("./car");
const Trailer = require("./trailer");
const CarTransporter = require("./carTransporter");

class CarPark{

    vehicles = new Map();
    cars = [];
    trucks = [];
    trailers = [];
    carTransporters = [];

    addVehicle(vehicleType, regNum, maker, model, ...args){
        switch (vehicleType.toLowerCase()) {
            case "car":
                this.cars.push(new Car(regNum, maker, model, args[0]));
                this.vehicles.set("cars", this.cars);
                break;
            case "trailer":
                this.trailers.push(new Trailer(regNum, maker, model, args[0], args[1]));
                this.vehicles.set("trailers", this.trailers);
                break;
            case "car transporter":
                this.carTransporters.push(new CarTransporter(regNum, maker, model, args[0], args[1]));
                this.vehicles.set("car transporters", this.carTransporters);
        }
    }

    showAllVehicles(){
        console.log("\nCar Park, all:")
        this.vehicles.forEach((value, key) => {
            console.log('\n' + key);
            for (let i in value) {
                console.log(value[i].toString());
            }
        }
        )
    }

    showAvailable(){
        console.log("\nCar Park, available:")
        this.vehicles.forEach((value, key) => {
            console.log('\n' + key);
            let empty = 1;
            for (let i in value) {
                if (value[i].available) {
                    empty = 0;
                    console.log(value[i].toString());
                }
            }
            if (empty) {console.log("No " + key + " available")}
        }
        )
    }

    rent(regNum, renter, rentUntil, ...args) {
        for (let i of this.vehicles.values()) {
            for (let j in i) {
                if (i[j].regNum === regNum) {
                    i[j].rent(renter, rentUntil, args[0], args[1]);
                }
            }
        }
    }
}

module.exports = CarPark;