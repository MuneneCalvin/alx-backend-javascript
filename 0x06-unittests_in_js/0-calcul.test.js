const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber Tests', () => {
  it('check whole numbers a and b', () => {
    assert.equal(calculateNumber(1.0, 3.0), 4.0);
  });

  it('check upwards rounding of a', () => {
    assert.equal(calculateNumber(1.5, 2.0), 4.0);
  });

  it('check upwards rounding of b', () => {
    assert.equal(calculateNumber(1.0, 2.6), 4.0);
  });

  it('check upwards rounding of a and b', () => {
    assert.equal(calculateNumber(1.5, 2.7), 5.0);
  });

  it('check downwards rounding of a', () => {
    assert.equal(calculateNumber(1.4, 2.0), 3.0);
  });

  it('check downwards rounding of b', () => {
    assert.equal(calculateNumber(1.0, 2.2), 3.0);
  });

  it('check downwards rounding of a and b', () => {
    assert.equal(calculateNumber(1.4, 2.1), 3.0);
  });

  it('check downwards rounding of a and b with trailing 9\'s', () => {
    assert.equal(calculateNumber(1.499999, 2.4999999), 3.0);
  });
});
