const sinon = require('sinon');
const assert = require('chai').assert;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
  });
});
