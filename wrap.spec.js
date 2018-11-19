const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was privided', () => {
    expect(wrap('', 10)).to.equal('');
  });



  it('Returns string with 12 or less characters if maxLen is 12', () => {
    expect(wrap('Lorem ipsum dolor sit eu amet, elit na', 12)).to.equal('Lorem ipsum\ndolor sit eu\namet, elit\nna')
  })
});

