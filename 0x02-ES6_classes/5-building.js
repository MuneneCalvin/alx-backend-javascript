export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || Number.isNaN(sqft) || sqft <= 0) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method

  evacuationWarningMessage() {
    if (this.constructor === Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
