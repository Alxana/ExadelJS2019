const Car = require("./car");
const Trailer = require("./trailer");
const CarTransporter = require("./carTransporter");
let vehicles = new Map();
let cars = [];
let trucks = [];
let trailers = [];
let carTransporters = [];

function CarPark(){};

CarPark.prototype.addVehicle = function(vehicleType, regNum, maker, model, ...args){
    switch (vehicleType.toLowerCase()) {
        case "car":
            cars.push(new Car(regNum, maker, model, args[0]));
            vehicles.set("cars", cars);
            break;
        case "trailer":
            trailers.push(new Trailer(regNum, maker, model, args[0], args[1]));
            vehicles.set("trailers", trailers);
            break;
        case "car transporter":
            carTransporters.push(new CarTransporter(regNum, maker, model, args[0], args[1]));
            vehicles.set("car transporters", carTransporters);
    }
}

CarPark.prototype.showAllVehicles = function(){
    console.log("\nCar Park, all:")
    vehicles.forEach((value, key) => {
        console.log('\n' + key);
        for (let i in value) {
            console.log(value[i].toString());
        }
})};

CarPark.prototype.showAvailable = function(){
    console.log("\nCar Park, available:")
    vehicles.forEach((value, key) => {
        console.log('\n' + key);
        let empty = 1;
        for (let i in value) {
            if (value[i].available) {
                empty = 0;
                console.log(value[i].toString());
            }
        }
        if (empty) {console.log("No " + key + " available")}
    })};

CarPark.prototype.rent = function(regNum, renter, rentUntil, ...args){
    for(let i of vehicles.values()){
        for(let j in i){
            if (i[j].regNum === regNum){
                 i[j].rent(renter, rentUntil, args[0], args[1]);
            }
        }
    }
}

module.exports = CarPark;