/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const recursiveFactorial = require('../recursiveFactorial.js');

describe('recursiveFact',() => {
  it('should be a function', () =>{
    expect(recursiveFactorial).to.be.a('function');
  });

  it('0 factorial should be 1',() => {
  expect(recursiveFactorial(0)).to.be.equal(1);
  });

    it('1 factorial should be 1',() => {
  expect(recursiveFactorial(1)).to.be.equal(1);
  });

  it('4 factorial should be 24',() => {
  expect(recursiveFactorial(4)).to.be.equal(24);
  });

    it('10 factorial should be 3,628,800',() => {
  expect(recursiveFactorial(10)).to.be.equal(3628800);
  });




});