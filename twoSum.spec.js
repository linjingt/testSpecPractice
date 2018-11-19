const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns empty string if no two indices add up to target', () => {
    expect(twoSum([], 5)).to.equal([]);
    expect(twoSum([1, 2, 3], 4).to.equal([]));
  });

  it('Returns indices of two elements that sums up to target number', () => {
    expect(twoSum([1, 2, 3], 5).to.equal([1, 2]));
  });
});
