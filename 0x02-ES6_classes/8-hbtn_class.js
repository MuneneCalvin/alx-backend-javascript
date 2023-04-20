export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || Number.isNaN(size) || size <= 0) {
      throw new TypeError('Size must be a positive number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // When casting the class to a number, return the size

  valueOf() {
    return this._size;
  }

  // When casting the class to a string, return the location

  toString() {
    return this._location;
  }
}
