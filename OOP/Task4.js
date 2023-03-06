class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 5;
    console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.name} рухається зі швидкістю ${this.speed} км/г`);
    return this;
  }
}

class ElectricCar extends Car {
  #battery;
  constructor(name, speed, battery) {
    super(name, speed);
    this.#battery = battery;
  }
  accelerate() {
    this.speed += 10;
    this.#battery -= 1;
    console.log(
      `${this.name} рухається зі швидкістю ${this.speed} км/г, з зарядом ${
        this.#battery
      }%`
    );
    return this;
  }
  chargeBattery(chargeLevel) {
    this.#battery = chargeLevel;
    return this;
  }
}
const tesla = new ElectricCar("Tesla", 100, 33);
tesla
  .accelerate()
  .break()
  .accelerate()
  .accelerate()
  .accelerate()
  .chargeBattery(80)
  .break()
  .accelerate();
