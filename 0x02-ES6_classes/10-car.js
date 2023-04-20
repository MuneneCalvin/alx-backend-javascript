export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // create a unique symbol for the cloneCar method

    this[Symbol.for('cloneCar')] = () => new Car(this._brand, this._motor, this._color);
  }

  // cloneCar method that returns the new instance

  cloneCar() {
    return this[Symbol.for('cloneCar')]();
  }
}
