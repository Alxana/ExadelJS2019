const CarPark = require("./carPark");
const Car = require("./car");
const Trailer = require("./trailer");
const CarTransporter = require("./carTransporter");

let carPark;
carPark = new CarPark();
carPark.addVehicle('car', "fd234b", "VW", "Polo", 4);
carPark.addVehicle('trailer', "abc444b", "Mercedes", "Actros", 8.5, 250);
carPark.addVehicle('car transporter', "nm123gh", "Volvo", "VAH 300", 6, 10);
carPark.addVehicle('car', "ab123KL", "Nissan", "X-Trail", 4)
carPark.showAllVehicles();
carPark.showAvailable();

console.log("\nRenting a car");
carPark.rent("ab123KL", "Alex V", "21.11.2019", 3);
console.log("\nTrying to rent the same car");
carPark.rent("ab123KL", "Max F", "20.12.2019");
console.log("\nRenting another car");
carPark.rent("fd234b", "Max F", "20.12.2019");

console.log("\nTrying to rent a trailer when cargo is more than capacity");
carPark.rent("abc444b", "Mark J", "12.12.2019", 6, 300);
console.log("\nTrying to rent a trailer when cargo is ok, but max weight of truck is too low");
carPark.rent("abc444b", "Mark J", "12.12.2019", 6, 250);
console.log("\nRenting a trailer is successful");
carPark.rent("abc444b", "Mark J", "12.12.2019", 9, 250);

console.log("\nTrying to rent a car transporter when number of cars to transport exceeds capacity");
carPark.rent("nm123gh", "Jacob R", "1.1.2020", 7, 11);
console.log("\nRenting a car transporter is successful");
carPark.rent("nm123gh", "Jacob R", "1.1.2020", 7, 10);

carPark.showAvailable();

