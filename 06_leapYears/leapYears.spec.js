const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test.skip('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test.skip('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test.skip('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
