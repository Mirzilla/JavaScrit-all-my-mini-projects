const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 5;
  console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
};

const ElectricCar = function (name, speed, battery) {
  Car.call(this, name, speed);
  this.battery = battery;
};
ElectricCar.prototype = Car.prototype;
ElectricCar.prototype.chargeBattery = function (chargeLevel) {
  this.battery = chargeLevel;
};
ElectricCar.prototype.accelerate = function () {
  this.speed += 10;
  this.battery -= 1;
  console.log(
    `${this.name} рухається зі швидкістю ${this.speed} км/г, з зарядом ${this.battery}%`
  );
};
const tesla = new ElectricCar("Tesla", 100, 33);

console.log(tesla);
tesla.chargeBattery(80);
console.log(tesla);
tesla.break();
tesla.break();
tesla.break();
tesla.break();
tesla.break();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
