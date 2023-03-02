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
const honda = new Car("Honda", 120);
const bmw = new Car("Bmw", 150);
honda.accelerate();
bmw.accelerate();
honda.break();
bmw.break();
honda.break();
bmw.break();
honda.break();
bmw.break();
honda.break();
bmw.break();
honda.break();
bmw.break();
