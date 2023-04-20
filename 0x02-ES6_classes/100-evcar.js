import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;

    // create a unique symbol for the cloneCar method
    this[Symbol.for('cloneCar')] = () => new Car(this._brand, this._motor, this._color);
  }

  // override cloneCar method to return Car instance
  cloneCar() {
    return this[Symbol.for('cloneCar')]();
  }
}
