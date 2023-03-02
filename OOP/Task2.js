class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  get speedMph() {
    return console.log(this.speed / 1.6);
  }
  set speedMph(speed) {
    console.log((this.speed = speed * 1.6));
  }
  accelerate() {
    this.speed += 5;
    console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
  }
}
const honda = new Car("Honda", 125);
honda.speedMph;
honda.speedMph = 125;
honda.accelerate();
honda.break();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.accelerate();
honda.speedMph;
honda.speedMph = 15;

// Car.prototype.accelerate = function () {
//     this.speed += 5;
//     console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
// };
// Car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
