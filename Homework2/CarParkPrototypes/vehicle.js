function Vehicle(regNum, maker, model) {
    this.regNum = regNum;
    this.maker = maker;
    this.model = model;
    this.available = true;
    this.returnDate = null;
    this.renter = null;
}

Vehicle.prototype.isAvailable = function () {
    if (this.available){
        console.log(`${this.maker} ${this.model} with registration number ${this.regNum} is available`);
    }
    else {
        console.log(`${this.maker} ${this.model} with registration number ${this.regNum} is rented by ${this.renter}.
            It will be available after ${this.returnDate}`);
    }
    return this.available;
};

Vehicle.prototype.rent = function (renter, rentUntil) {
    if (this.isAvailable()){
        this.renter = renter;
        this.returnDate = rentUntil;
        this.available = false;
        console.log(`${this.maker} ${this.model} with registration number ${this.regNum} is rented till ${this.returnDate}`);
    } else console.error("Cannot be rented now!");
};

Vehicle.prototype.return = function () {
    this.available = true;
    this.renter = null;
    this.returnDate = null;
    console.log(`${this.maker} ${this.model} with registration number ${this.regNum} was returned by renter`);
};

module.exports = Vehicle;